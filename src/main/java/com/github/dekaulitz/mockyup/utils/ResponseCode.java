package com.github.dekaulitz.mockyup.utils;

import com.github.dekaulitz.mockyup.vmodels.ErrorVmodel;
import org.springframework.http.HttpStatus;


public class ResponseCode {

    public static ErrorVmodel TOKEN_INVALID = new ErrorVmodel(HttpStatus.UNAUTHORIZED, "MOCK010", "token invalid");
    public static ErrorVmodel REFRESH_TOKEN_REQUIRED = new ErrorVmodel(HttpStatus.FORBIDDEN, "MOCK011", "refresh token required");
    public static ErrorVmodel TOKEN_EXPIRED = new ErrorVmodel(HttpStatus.UNAUTHORIZED, "MOCK012", "token expired please login");
    public static ErrorVmodel TOKEN_NOT_FOUND = new ErrorVmodel(HttpStatus.UNAUTHORIZED, "MOCK010", "token invalid");
    public static ErrorVmodel INVALID_USERNAME_OR_PASSWORD = new ErrorVmodel(HttpStatus.UNAUTHORIZED, "MOCK014", "invalid username or password");
    public static ErrorVmodel INVALID_ACCESS_PERMISSION = new ErrorVmodel(HttpStatus.FORBIDDEN, "MOCK015", "invalid access permissions");


    public static ErrorVmodel MOCKUP_NOT_FOUND = new ErrorVmodel(HttpStatus.BAD_REQUEST, "MOCK020", "mockup not found");
    public static ErrorVmodel INVALID_MOCKUP_STRUCTURE = new ErrorVmodel(HttpStatus.BAD_REQUEST, "MOCK021", "invalid mockup structure");
    public static ErrorVmodel USER_NOT_FOUND = new ErrorVmodel(HttpStatus.BAD_REQUEST, "MOCK022", "user not found");
    public static ErrorVmodel USER_ALREADY_EXIST = new ErrorVmodel(HttpStatus.BAD_REQUEST, "MOCK023", "user already exists");
    public static ErrorVmodel BAD_REQUEST = new ErrorVmodel(HttpStatus.BAD_REQUEST, "MOCK024", "user already exists");


    public static ErrorVmodel GLOBAL_ERROR_MESSAGE = new ErrorVmodel(HttpStatus.INTERNAL_SERVER_ERROR, "MOCK001", "something bad happen");
    public static ErrorVmodel GLOBAL_PAGE_NOT_FOUND = new ErrorVmodel(HttpStatus.NOT_FOUND, "MOCK002", "page not found");


}
