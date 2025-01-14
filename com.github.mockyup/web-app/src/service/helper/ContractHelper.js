export const defaultContract = {
    openapi: '3.0.2',
    info: {
        title: 'Open Api Collection',
        description: 'Open api collection for test',
        version: 'v1',
        termsOfService: '<ul><li>something</li></ul>',
        contact: {
            name: 'fahmi sulaiman',
            email: 'suaimanfahmi@gmail.com',
            url: 'sulaimanfahmi.com'
        },
        license: {
            name: 'APACHE COMMON',
            url: 'https://raw.githubusercontent.com/dekaulitz/MockyUp/master/LICENSE'
        }
    },
    servers: [
        {
            url: 'http://localhost:7070/test-mocking/mocking/{testing_path}/path',
            description: 'Testing locally',
            variables: {
                host: {
                    default: 'localhost:8080'
                },
                testing_path: {
                    description: 'testing id path',
                    default: '5e3aa62f11b5dc7e1bfaa1d6'
                }
            }
        }
    ],
    tags: [
        {
            name: 'users',
            description: 'users apis'
        },
        {
            name: 'login',
            description: 'users login'
        }
    ],
    paths: {
        '/login': {
            post: {
                description: 'user do login for authentication',
                tags: [
                    'login'
                ],
                summary: 'user login',
                operationId: '',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: {
                                        type: 'string'
                                    },
                                    password: {
                                        type: 'string',
                                        format: 'password'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'success login',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        userId: {
                                            type: 'string'
                                        },
                                        token: {
                                            type: 'string'
                                        },
                                        access: {
                                            type: 'array',
                                            items: {
                                                type: 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'x-mock-request': {
                    mockingRequestHeaders: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com header',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com  header password something',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestPaths: [],
                    mockingRequestQueries: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com query parameter',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com query parameter with password something',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestBodies: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: null
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            userId: 'response dari username sulaimanfahmi@gmail.com with password null',
                                            token: 'string',
                                            access: [
                                                'string',
                                                'string2',
                                                'string3'
                                            ]
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingDefaultResponse: {
                        statusCode: 200,
                        headers: {
                            'x-authorization-token': 'ini header token',
                            'x-path': '/login'
                        },
                        content: {
                            'application/json': {
                                value: {
                                    userId: 'response_default',
                                    token: 'string',
                                    access: [
                                        'string',
                                        'string2',
                                        'string3'
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        },
        '/users/{id}': {
            description: 'get user detail',
            parameters: [
                {
                    name: 'id',
                    in: 'path',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ],
            get: {
                summary: '',
                operationId: '',
                responses: {
                    200: {
                        description: '',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        _id: {
                                            type: 'string'
                                        },
                                        username: {
                                            type: 'string'
                                        },
                                        email: {
                                            type: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'x-mock-request': {
                    mockingRequestHeaders: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from header with username sulaimanfahmi@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from header with username sulaimanfahmi1@gmail.com and parameter something',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestPaths: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    id: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from path with username sulaimanfahmi@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    id: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from path with username sulaimanfahmi1@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestQueries: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from query with username sulaimanfahmi@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/login'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'string',
                                            username: 'this from query with username sulaimanfahmi1@gmail.com and password something',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingDefaultResponse: {
                        statusCode: 200,
                        headers: {
                            'x-authorization-token': 'ini header token',
                            'x-path': '/login'
                        },
                        content: {
                            'application/json': {
                                value: {
                                    _id: 'string',
                                    username: 'default response',
                                    email: 'string'
                                }
                            }
                        }
                    }
                }
            },
            put: {
                description: 'user do login for authentication',
                tags: [
                    'login'
                ],
                summary: 'user login',
                operationId: '',
                parameters: [],
                requestBody: {
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {
                                    username: {
                                        type: 'string'
                                    },
                                    password: {
                                        type: 'string',
                                        format: 'password'
                                    }
                                }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: 'success login',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        userId: {
                                            type: 'string'
                                        },
                                        token: {
                                            type: 'string'
                                        },
                                        access: {
                                            type: 'array',
                                            items: {
                                                type: 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                'x-mock-request': {
                    mockingRequestHeaders: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this is from header with username sulaimanfahmi@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this is from header with username sulaimanfahmi1@gmail.com and password something',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestPaths: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    id: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from path with id sulaimanfahmi@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    id: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from path with id sulaimanfahmi1@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestQueries: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from query parameter with username sulaimanfahmi1@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: 'something'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from query parameter with username sulaimanfahmi1@gmail.com and password something',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingRequestBodies: [
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi@gmail.com'
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from body with username sulaimanfahmi1@gmail.com',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        },
                        {
                            matchingProperty: {
                                description: 'when user login success',
                                properties: {
                                    username: {
                                        type: 'string',
                                        value: 'sulaimanfahmi1@gmail.com'
                                    },
                                    password: {
                                        type: 'string',
                                        value: null
                                    }
                                }
                            },
                            response: {
                                statusCode: 200,
                                headers: {
                                    'x-authorization-token': 'ini header token',
                                    'x-path': '/users/{id}'
                                },
                                content: {
                                    'application/json': {
                                        value: {
                                            _id: 'put',
                                            username: 'this from body with username sulaimanfahmi1@gmail.com and password null',
                                            email: 'string'
                                        }
                                    }
                                }
                            }
                        }
                    ],
                    mockingDefaultResponse: {
                        statusCode: 200,
                        headers: {
                            'x-authorization-token': 'ini header token',
                            'x-path': '/login'
                        },
                        content: {
                            'application/json': {
                                value: {
                                    _id: 'put',
                                    username: 'response default',
                                    email: 'string'
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    components: {
        'x-schema-database': {
            type: 'object',
            properties: {
                _id: {
                    type: 'string',
                    format: 'uuid',
                    'x-database-config': {
                        isPrimary: true,
                        isUnique: true
                    }
                }
            }
        }
    }
};
//# sourceMappingURL=ContractHelper.js.map