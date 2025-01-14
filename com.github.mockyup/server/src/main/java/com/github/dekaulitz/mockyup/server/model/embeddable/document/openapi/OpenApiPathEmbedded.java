package com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi;

import com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi.constants.OpenApiPathHttpMethod;
import com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi.embedded.OpenApiParameterEmbedded;
import com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi.embedded.OpenApiPathOperationEmbedded;
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
public class OpenApiPathEmbedded implements Serializable {

  private String path;
  // PathItem.httpMethod
  private OpenApiPathHttpMethod httpMethod;
  // Paths.extensions
  private Map<String, Object> extensions = new HashMap<>();

  private List<OpenApiServerEmbedded> servers = new ArrayList<>();
  private List<OpenApiParameterEmbedded> parameters = new ArrayList<>();
  /**
   * PathItem.get or PathItem.post or .. defined base on httpMethod operation
   */
  private OpenApiPathOperationEmbedded operation;

  /**
   * this for getting property from response object example response {"_id":"so123123"} so the $ref
   * is {$response._id}
   */
  private String $ref = null;

  public String get$ref() {
    return $ref;
  }

  public void set$ref(String $ref) {
    this.$ref = $ref;
  }

//  private List<OpenApiPathResponseEmbedded> responses = new ArrayList<>();
//  private List<String> tags = new ArrayList<>();
//  private String summary;
//  private String description;
//  private ExternalDocumentation externalDocs;
//  private Map<String, Object> extensions = new HashMap<>();
//  private String operationId;


}
