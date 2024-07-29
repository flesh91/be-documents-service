import { AnalyticsService } from '@diia-inhouse/analytics'
import { CryptoDeps } from '@diia-inhouse/crypto'
import { HttpDeps } from '@diia-inhouse/http'
import { I18nService } from '@diia-inhouse/i18n'
import { RedisDeps } from '@diia-inhouse/redis'
import { SupergenClient } from '@diia-inhouse/super-gen-client'
import { UserServiceClient } from '@diia-inhouse/user-service-client'

import Utils from '@utils/index'

import { AppConfig } from '@interfaces/config'
import { ProvidersDeps } from '@interfaces/providers'

export type InternalDeps = {
    appUtils: Utils
}

export interface GrpcClientsDeps {
    userServiceClient: UserServiceClient
    supergenClient: SupergenClient
}

export type AppDeps = {
    config: AppConfig
    analytics: AnalyticsService
    i18n: I18nService
} & InternalDeps &
    ProvidersDeps &
    RedisDeps &
    CryptoDeps &
    HttpDeps
