package com.github.dekaulitz.mockyup.server.model.embeddable.document;

import com.github.dekaulitz.mockyup.server.model.constants.Role;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
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
public class UserAccessProjectEmbedded {

  @NotBlank
  private String projectId;
  @NotBlank
  private String projectName;

  private String projectDescription;
  @NotNull
  private Role access;
}
