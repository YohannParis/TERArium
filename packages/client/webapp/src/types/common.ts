import { Model } from './Model';
import { XDDArticle } from './XDD';

export enum ResourceType {
	XDD = 'xdd',
	MODEL = 'model',
	DATASET = 'dataset',
	ALL = 'all'
}

export type XDDSearchParams = {
	known_terms?: string[];
	dataset?: string | null;
	enablePagination: boolean;
	pageSize?: number;
};

export type ModelSearchParams = {
	country?: string;
};

export type SearchParameters = {
	[ResourceType.XDD]?: XDDSearchParams;
	[ResourceType.MODEL]?: ModelSearchParams;
};

export type ResultType = Model | XDDArticle;

export type SearchResults = {
	results: ResultType[];
	searchSubsystem: string;
	hits?: number;
	hasMore?: boolean;
	next_page?: string;
};

//
// Facets
//
export type FacetBucket = {
	key: string;
	value: number;
};

export type Facets = {
	[key: string]: FacetBucket[];
};

// Side panel
export type SidePanelTab = {
	name: string;
	icon?: string;
	imgSrc?: string;
	isGreyscale?: string;
	badgeCount?: number;
};
