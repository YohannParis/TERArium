/**
 * External (assets and intermediates)
 */

import API from '@/api/api';
import { DocumentAsset } from '@/types/Document';

/**
 * Get external document asset linked by a given project asset/doc id
 * @docId string - represents a specific project asset/doc id
 * @return DocumentAsset|null - the specific document info including its xdd url, or null if none returned by API
 */
async function getDocument(docId: string): Promise<DocumentAsset | null> {
	const response = await API.get(`/external/publications/${docId}`);
	return response?.data ?? null;
}

/**
 * Get external document asset in bulk given their internal TDS IDs
 * @docId string array - represents a list of specific project asset/doc id
 * @return DocumentAsset[]|null - the specific document info including its xdd url, or null if none returned by API
 */
async function getBulkDocumentAssets(docIDs: string[]) {
	const result: DocumentAsset[] = [];
	const promiseList = [] as Promise<DocumentAsset | null>[];
	docIDs.forEach((docId) => {
		promiseList.push(getDocument(docId));
	});
	const responsesRaw = await Promise.all(promiseList);
	responsesRaw.forEach((r) => {
		if (r) {
			result.push(r);
		}
	});
	return result;
}

/**
 * add external document asset
 * @body DocumentAsset - represents the metadata (xdd) url of the asset to be added
 * @return {id: string}|null - the id of the inserted asset, or null if none returned by API
 */
async function addDocuments(body: DocumentAsset): Promise<{ id: string } | null> {
	// FIXME: handle cases where assets is already added to the project
	const response = await API.post('/external/publications', body);
	return response?.data ?? null;
}

export { getDocument, getBulkDocumentAssets, addDocuments };
