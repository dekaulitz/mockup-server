package com.github.dekaulitz.mockyup.server.model.response.contract;

import com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi.OpenApiProjectInfoEmbedded;
import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder(toBuilder = true)
@ToString(callSuper = true)
public class ContractCardResponseModel implements Serializable {

  private String id;
  private String projectId;
  private boolean isPrivate;
  private String openApiVersion;
  private OpenApiProjectInfoEmbedded info;
}