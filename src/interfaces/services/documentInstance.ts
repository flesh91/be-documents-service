import {
    DataForDisplayingInOrderConfigurations,
    DocumentContentItem,
    DocumentFrontCard,
    DocumentFullInfoItem,
    ListItemMlc,
} from '@diia-inhouse/types'

export interface DocumentInstance {
    id: string
    docStatus: number
    docNumber: string
    docData: Record<string, unknown> & { docName: string }
    shareLocalization?: string
    dataForDisplayingInOrderConfigurations?: DataForDisplayingInOrderConfigurations
    frontCard?: DocumentFrontCard
    frontCardBackground?: string
    qr?: string
    content: DocumentContentItem[]
    fullInfo: DocumentFullInfoItem[]
    dataForDisplayingAsListItem?: ListItemMlc
}
