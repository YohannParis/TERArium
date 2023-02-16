package software.uncharted.terarium.hmiserver.resources.documentservice;

import io.quarkus.cache.CacheResult;
import org.eclipse.microprofile.openapi.annotations.tags.Tag;
import org.eclipse.microprofile.rest.client.inject.RestClient;
import software.uncharted.terarium.hmiserver.caching.CacheClearService;
import software.uncharted.terarium.hmiserver.resources.documentservice.responses.XDDSetsResponse;
import software.uncharted.terarium.hmiserver.proxies.documentservice.DocumentProxy;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api/document/sets")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@Tag(name = "XDD Sets REST Endpoint")
public class SetResource {

	@RestClient
	DocumentProxy proxy;

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Tag(name = "Get available XDD sets or collections")
	@CacheResult(cacheName = CacheClearService.CacheName.Constants.XDD_SETS_NAME)
	public XDDSetsResponse getAvailableSets() {
		return proxy.getAvailableSets();
	}
}
