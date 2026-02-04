// Copyright 2025 Daytona Platforms Inc.
// SPDX-License-Identifier: AGPL-3.0

package recording

import (
	"path/filepath"

	cmap "github.com/orcaman/concurrent-map/v2"
)

// RecordingService manages screen recording sessions
type RecordingService struct {
	activeRecordings cmap.ConcurrentMap[string, *activeRecording]
	recordingsDir    string
}

func NewRecordingService(configDir string) *RecordingService {
	recordingsDir := filepath.Join(configDir, "recordings")
	return &RecordingService{
		activeRecordings: cmap.New[*activeRecording](),
		recordingsDir:    recordingsDir,
	}
}

func (s *RecordingService) GetRecordingsDir() string {
	return s.recordingsDir
}
