/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { Provider } from '@nestjs/common'
import { OpensearchClient } from 'nestjs-opensearch'
import { SandboxOpenSearchAdapter } from '../adapters/sandbox-opensearch.adapter'
import { SANDBOX_SEARCH_ADAPTER } from '../constants/sandbox-tokens'
import { SandboxSearchAdapter } from '../interfaces/sandbox-search.interface'
import { TypedConfigService } from '../../config/typed-config.service'

export const SandboxSearchAdapterProvider: Provider = {
  provide: SANDBOX_SEARCH_ADAPTER,
  useFactory: (configService: TypedConfigService, opensearchClient: OpensearchClient): SandboxSearchAdapter | null => {
    const sandboxSearchConfig = configService.get('opensearch.sandboxSearch')

    if (sandboxSearchConfig?.enabled) {
      return new SandboxOpenSearchAdapter(configService, opensearchClient)
    }

    return null
  },
  inject: [TypedConfigService, OpensearchClient],
}
