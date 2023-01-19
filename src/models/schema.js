export const schema = {
    "models": {
        "Pattern": {
            "name": "Pattern",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "url": {
                    "name": "url",
                    "isArray": false,
                    "type": "AWSURL",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "problem": {
                    "name": "problem",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "context": {
                    "name": "context",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "structure": {
                    "name": "structure",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "contraindications": {
                    "name": "contraindications",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "examples": {
                    "name": "examples",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "references": {
                    "name": "references",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "forces": {
                    "name": "forces",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "alsoKnowAs": {
                    "name": "alsoKnowAs",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "applicability": {
                    "name": "applicability",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": {
                        "enum": "LifecycleStatus"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "author": {
                    "name": "author",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "DOI": {
                    "name": "DOI",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "history": {
                    "name": "history",
                    "isArray": true,
                    "type": "AWSJSON",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "parentOf": {
                    "name": "parentOf",
                    "isArray": true,
                    "type": {
                        "model": "Pattern"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "patternParentOfId"
                        ]
                    }
                },
                "childOf": {
                    "name": "childOf",
                    "isArray": false,
                    "type": {
                        "model": "Pattern"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "patternParentOfId"
                        ]
                    }
                },
                "supercedes": {
                    "name": "supercedes",
                    "isArray": true,
                    "type": {
                        "model": "Pattern"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "patternSupercedesId"
                        ]
                    }
                },
                "patternType": {
                    "name": "patternType",
                    "isArray": false,
                    "type": {
                        "enum": "PatternType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "documentation": {
                    "name": "documentation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "patternParentOfId": {
                    "name": "patternParentOfId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "patternSupercedesId": {
                    "name": "patternSupercedesId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Patterns",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Pattern.parentOf",
                        "fields": [
                            "patternParentOfId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "gsi-Pattern.supercedes",
                        "fields": [
                            "patternSupercedesId"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "PatternType": {
            "name": "PatternType",
            "values": [
                "PATHWAY",
                "EXPERIENCE",
                "ACTIVITY",
                "LAYOUT",
                "XBLOCK"
            ]
        },
        "LifecycleStatus": {
            "name": "LifecycleStatus",
            "values": [
                "PROPOSED",
                "DRAFT",
                "STANDARD",
                "BESTCURRENTPRACTICE",
                "EXPERIMENTAL",
                "HISTORIC",
                "INFORMATIONAL"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.2",
    "version": "264b58ae3c0ea8167e7a752e99509c5f"
};