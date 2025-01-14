package com.github.dekaulitz.mockyup.server.model.embeddable.document.mockup;

import com.github.dekaulitz.mockyup.server.model.embeddable.document.openapi.schemas.BaseSchema;
import java.io.Serializable;
import java.util.Map;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MockingMatchingAttributeEmbedded implements Serializable {

  private String description;
  private Map<String, BaseSchema> properties;
}
