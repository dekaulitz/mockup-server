package com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi;

import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.embedded.OpenApiExampleEmbedded;
import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.embedded.OpenApiHeaderEmbedded;
import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.embedded.OpenApiLinkEmbedded;
import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.embedded.OpenApiParameterEmbedded;
import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.embedded.OpenApiPathResponse;
import com.github.dekaulitz.mockyup.server.db.entities.v2.embeddable.openapi.schemas.BaseSchema;
import io.swagger.v3.oas.models.callbacks.Callback;
import io.swagger.v3.oas.models.parameters.RequestBody;
import io.swagger.v3.oas.models.security.SecurityScheme;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OpenApiComponents implements Serializable {

  private Map<String, BaseSchema> schemas = new HashMap<>();
  private List<OpenApiPathResponse> responses = new ArrayList<>();
  private Map<String, OpenApiParameterEmbedded> parameters = new HashMap<>();
  private Map<String, OpenApiExampleEmbedded> examples = new HashMap<>();
  private Map<String, RequestBody> requestBodies = new HashMap<>();
  private Map<String, OpenApiHeaderEmbedded> headers = new HashMap<>();
  private Map<String, SecurityScheme> securitySchemes = new HashMap<>();
  private Map<String, OpenApiLinkEmbedded> links = new HashMap<>();
  private Map<String, Callback> callbacks = new HashMap<>();
  private Map<String, Object> extensions = new HashMap<>();
}