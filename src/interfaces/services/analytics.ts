import { AppUserActionHeaders, PlatformType } from '@diia-inhouse/types'

import { CommonDocument, DocumentStatusCode } from '@interfaces/services/documents'

export enum AnalyticsCategory {
    VerificationDocuments = 'verificationDocuments',
}

export enum AnalyticsActionType {
    GetIdCard = 'getIdCard',
    GetForeignPassport = 'getForeignPassport',
    GetUId = 'getUId',
    GetDocument = 'getDocument',

    GenerateOtpIdCard = 'generateOtpIdCard',
    GenerateOtpForeignPassport = 'generateOtpForeignPassport',
}

export enum AnalyticsActionResult {
    Success = 'success',
    OldModel = 'oldModel',
    NeedVerification = 'needVerification',
    NoPhoto = 'noPhoto',
    Confirming = 'confirming',
    NotConfirmed = 'notConfirmed',
    Inactive = 'inactive',
    Error = 'error',
    NotFound = 'notFound',
}

export enum DocumentAnalyticsCategory {
    GetDocuments = 'getDocuments',
    AddDocuments = 'addDocuments',
    DeleteDocument = 'deleteDocument',
    InfoScreen = 'infoScreen',
}

export interface DocumentAnalyticsService {
    documentTypeToGenerateOtpAnalyticsAction?: Partial<Record<string, string>>
    documentTypeToGetDocumentAnalyticsAction?: Partial<Record<string, string>>
    actionResultByStatusCode?: Partial<Record<DocumentStatusCode, AnalyticsActionResult>>
}

export interface DocumentAnalyticsParams {
    documentType: string
    document?: CommonDocument
    userIdentifier: string
    headers: AppUserActionHeaders
    statusCode?: DocumentStatusCode
    category?: DocumentAnalyticsCategory
    documentId?: string
    data?: DocumentAnalytics['data']
    processCode?: number
}

export interface DocumentAnalytics {
    date: string
    category: DocumentAnalyticsCategory
    action: {
        type: AnalyticsActionType
        result: AnalyticsActionResult
        processCode?: number
    }
    identifier: string
    appVersion: string
    device: {
        identifier: string
        platform: {
            type: PlatformType
            version: string
        }
    }
    documentType: string
    data?: {
        documentId: string
        subtype?: string
        expirationDate?: string
        vehicleLicenseId?: string
        [key: string]: unknown
    }
}
