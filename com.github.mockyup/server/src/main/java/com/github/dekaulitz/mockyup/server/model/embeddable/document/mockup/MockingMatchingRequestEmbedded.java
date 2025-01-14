package com.github.dekaulitz.mockyup.server.model.embeddable.document.mockup;

import java.io.Serializable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MockingMatchingRequestEmbedded implements Serializable {

  private MockingMatchingAttributeEmbedded matchingProperty;
  private MockingMatchingResponseEmbedded response;
}
