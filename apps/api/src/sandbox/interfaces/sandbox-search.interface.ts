/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { SandboxState } from '../enums/sandbox-state.enum'
import { PaginatedSandboxesDto } from '../dto/paginated-sandboxes.dto'
import { SandboxSearchSortField, SandboxSearchSortDirection } from '../dto/search-sandboxes-query.dto'

export interface SandboxSearchFilters {
  organizationId: string
  id?: string
  name?: string
  labels?: { [key: string]: string }
  includeErroredDeleted?: boolean
  states?: SandboxState[]
  snapshots?: string[]
  regionIds?: string[]
  minCpu?: number
  maxCpu?: number
  minMemoryGiB?: number
  maxMemoryGiB?: number
  minDiskGiB?: number
  maxDiskGiB?: number
  isPublic?: boolean
  isRecoverable?: boolean
  createdAtAfter?: Date
  createdAtBefore?: Date
  lastEventAfter?: Date
  lastEventBefore?: Date
}

export interface SandboxSearchPagination {
  limit: number
  cursor?: string
}

export interface SandboxSearchSort {
  field?: SandboxSearchSortField
  direction?: SandboxSearchSortDirection
}

export type SandboxSearchResult = PaginatedSandboxesDto

/**
 * Interface for sandbox search operations
 * Provides search functionality for sandboxes with filtering and cursor-based pagination
 */
export interface SandboxSearchAdapter {
  /**
   * Search sandboxes for an organization
   * @param params - Search parameters
   * @param params.filters - Filters to apply
   * @param params.pagination - Pagination parameters
   * @param params.sort - Sort parameters
   * @returns Paginated search results with cursor for next page
   */
  search(params: {
    filters: SandboxSearchFilters
    pagination: SandboxSearchPagination
    sort: SandboxSearchSort
  }): Promise<SandboxSearchResult>
}
