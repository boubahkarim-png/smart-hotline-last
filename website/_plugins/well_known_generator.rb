module Jekyll
  class WellKnownGenerator < Generator
    safe true
    priority :lowest

    def generate(site)
      # Generate API Catalog (RFC 9727)
      if site.data['api_catalog']
        api_catalog = site.data['api_catalog']
        json_content = JSON.pretty_generate(api_catalog)
        write_to_well_known(site, 'api-catalog', json_content, 'application/json')
      end

      # Generate OAuth Authorization Server Metadata (RFC 8414)
      if site.data['oauth'] && site.data['oauth']['oauth']
        oauth = site.data['oauth']['oauth']
        oauth_auth = {
          "issuer" => oauth['issuer'],
          "authorization_endpoint" => oauth['authorization_endpoint'],
          "token_endpoint" => oauth['token_endpoint'],
          "grant_types_supported" => oauth['grant_types_supported'] || ["authorization_code", "client_credentials"],
          "response_types_supported" => ["code"]
        }
        json_content = JSON.pretty_generate(oauth_auth)
        write_to_well_known(site, 'oauth-authorization-server', json_content, 'application/json')
      end

      # Generate OAuth Protected Resource Metadata (RFC 9728)
      if site.data['oauth'] && site.data['oauth']['oauth'] && site.data['oauth']['oauth']['resource']
        resource = site.data['oauth']['oauth']['resource']
        protected_resource = {
          "resource" => resource['resource'],
          "authorization_servers" => resource['authorization_servers'] || [],
          "scopes_supported" => resource['scopes_supported'] || ["api:read"]
        }
        json_content = JSON.pretty_generate(protected_resource)
        write_to_well_known(site, 'oauth-protected-resource', json_content, 'application/json')
      end

      # Generate MCP Server Card (SEP-1649)
      if site.data['mcp'] && site.data['mcp']['mcp']
        mcp = site.data['mcp']['mcp']
        server_card = {
          "$schema" => "https://static.modelcontextprotocol.io/schemas/mcp-server-card/v1.json",
          "version" => "1.0",
          "protocolVersion" => "2025-06-18",
          "serverInfo" => mcp['serverInfo'] || {},
          "transport" => mcp['transport'] || {"type" => "streamable-http", "endpoint" => "/mcp"},
          "capabilities" => mcp['capabilities'] || {"resources" => true},
          "resources" => mcp['resources'] || []
        }
        json_content = JSON.pretty_generate(server_card)
        write_to_well_known(site, 'mcp/server-card.json', json_content, 'application/json')
      end

      # Generate Agent Skills Index (RFC v0.2.0)
      if site.data['agent_skills'] && site.data['agent_skills']['agent_skills']
        skills_index = site.data['agent_skills']['agent_skills']
        json_content = JSON.pretty_generate(skills_index)
        write_to_well_known(site, 'agent-skills/index.json', json_content, 'application/json')
      end
    end

    private

    def write_to_well_known(site, filename, content, content_type)
      dest_dir = File.join(site.dest, '.well-known')
      FileUtils.mkdir_p(dest_dir)
      File.write(File.join(dest_dir, filename), content)
    end
  end
end
