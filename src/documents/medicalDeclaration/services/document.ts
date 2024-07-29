import { DateTime } from 'luxon'

import { SupergenClient } from '@diia-inhouse/super-gen-client'
import { pdfUtils } from '@diia-inhouse/utils'

import MedicalDeclarationPdfDataMapper from '../dataMappers/documentPdf'

import { DocumentType, DocumentTypeCamelCase } from '@src/documents/medicalDeclaration/interfaces/services'

import { DocumentInstance } from '@interfaces/services/documentInstance'
import { DocumentDownloadParams, DocumentDownloadResponse, DocumentService, GetDocumentsResult } from '@interfaces/services/documents'

export default class EducationDocumentService implements DocumentService<DocumentType, DocumentTypeCamelCase> {
    readonly documentTypes: DocumentType[] = [DocumentType.MedicalDeclaration]

    readonly defaultSortOrder: Record<DocumentType, number> = {
        [DocumentType.MedicalDeclaration]: 1000, // TODO: need to set correct value
    }

    readonly documentTypeToName: Record<DocumentType, string> = {
        [DocumentType.MedicalDeclaration]: 'Декларація з лікарем',
    }

    readonly documentTypeResponseToDocumentType: Record<DocumentTypeCamelCase, DocumentType> = {
        [DocumentTypeCamelCase.MedicalDeclaration]: DocumentType.MedicalDeclaration,
    }

    readonly documentTypeToDocumentTypeResponse: Record<DocumentType, DocumentTypeCamelCase> = {
        [DocumentType.MedicalDeclaration]: DocumentTypeCamelCase.MedicalDeclaration,
    }

    readonly documentFilters: DocumentType[] = this.documentTypes

    constructor(
        private readonly supergenClient: SupergenClient,
        private readonly medicalDeclarationPdfDataMapper: MedicalDeclarationPdfDataMapper,
    ) {}

    async getDocuments(): Promise<GetDocumentsResult<DocumentInstance>> {
        throw new Error('Method not implemented.')
    }

    async verifyDocument(): Promise<DocumentInstance> {
        throw new Error('Method not implemented.')
    }

    async assertDocumentIsValid(): Promise<void> | never {
        throw new Error('Method not implemented.')
    }

    async downloadDocument(data: DocumentDownloadParams<DocumentType>): Promise<DocumentDownloadResponse> {
        // TODO: need to implement
        const { documentId } = data

        const requestDateTime = DateTime.now().toFormat('dd_MM_yyyy__HH_mm_ss')
        const documentName = this.documentTypeToName[DocumentType.MedicalDeclaration]
        const fileName = pdfUtils.getPdfFileName(documentName, documentId, requestDateTime)

        const sharingPdfData = this.medicalDeclarationPdfDataMapper.toSharingPdf()

        const { file } = await this.supergenClient.createPdf(sharingPdfData)

        return {
            documentFile: {
                file,
                name: fileName,
                mimeType: 'document/pdf',
            },
        }
    }
}
