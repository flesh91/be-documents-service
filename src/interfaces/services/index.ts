export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

export enum AttentionMessageParameterType {
    Link = 'link',
    Phone = 'phone',
    Email = 'email',
}

export interface AttentionMessageParameter {
    type: AttentionMessageParameterType
    data: {
        name: string
        alt: string
        resource: string
    }
}

export interface AttentionMessage {
    icon: string
    title?: string
    text?: string
    parameters?: AttentionMessageParameter[]
}

export interface TextWithParameters {
    text: string
    parameters?: AttentionMessageParameter[]
}

export interface NameValue {
    name: string
    value: string
}
