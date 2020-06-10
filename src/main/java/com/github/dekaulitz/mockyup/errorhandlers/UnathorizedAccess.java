package com.github.dekaulitz.mockyup.errorhandlers;

import lombok.Getter;
import org.springframework.security.core.AuthenticationException;

public class UnathorizedAccess extends AuthenticationException {
    @Getter
    private ErrorModel errorModel;

    public UnathorizedAccess(String msg, Throwable t) {
        super(msg, t);
    }

    public UnathorizedAccess(String msg) {
        super(msg);
    }

    public UnathorizedAccess(ErrorModel errorModel) {
        super(errorModel.getErrorMessage());
        this.errorModel = errorModel;
    }

    public UnathorizedAccess(ErrorModel errorModel, Exception e) {
        super(e.getMessage().isEmpty() ? errorModel.getErrorMessage() : e.getMessage());
        errorModel.setErrorMessage(this.getMessage());
        this.errorModel = errorModel;
    }
}