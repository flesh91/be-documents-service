import { UserActionArguments } from '@diia-inhouse/types'

import { DocumentInstance } from '@interfaces/services/documentInstance'
import { DocumentsWithOrder } from '@interfaces/services/documents'

export interface CustomActionArguments extends UserActionArguments {
    params: {
        filter?: string[]
    }
}

export type ActionResult = DocumentsWithOrder<DocumentInstance>
