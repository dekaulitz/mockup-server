package com.github.dekaulitz.mockyup.server.service.cms.api;

import com.github.dekaulitz.mockyup.server.db.entities.UserLogLoginEntity;
import com.github.dekaulitz.mockyup.server.errors.ServiceException;
import com.github.dekaulitz.mockyup.server.model.dto.AuthProfileModel;
import com.github.dekaulitz.mockyup.server.model.dto.MandatoryModel;
import com.github.dekaulitz.mockyup.server.model.param.GetUserLogLoginParam;
import com.github.dekaulitz.mockyup.server.service.common.api.BaseCrudService;
import com.mongodb.client.result.DeleteResult;
import java.util.List;
import javax.validation.constraints.NotBlank;

public interface UserLogLoginService extends
    BaseCrudService<UserLogLoginEntity> {

  List<UserLogLoginEntity> getAll(GetUserLogLoginParam getUserLogLoginParam);

  UserLogLoginEntity findByJti(@NotBlank String jti);

  DeleteResult deleteByParameter(@NotBlank GetUserLogLoginParam getUserLogLoginParam);

  UserLogLoginEntity deleteByJtiOrUserId(@NotBlank String jtIOrUserId);

  void logLogin(AuthProfileModel authProfileModel, MandatoryModel mandatoryModel) throws ServiceException;
}
