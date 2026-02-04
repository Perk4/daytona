// Copyright 2025 Daytona Platforms Inc.
// SPDX-License-Identifier: AGPL-3.0

package recording

import (
	"time"

	"github.com/daytonaio/daemon/pkg/recording"
)

// Recording represents a recording session (active or completed)
type RecordingDTO struct {
	ID              string     `json:"id"`
	FileName        string     `json:"fileName"`
	FilePath        string     `json:"filePath"`
	StartTime       time.Time  `json:"startTime"`
	EndTime         *time.Time `json:"endTime,omitempty"`
	Status          string     `json:"status"`
	DurationSeconds *float64   `json:"durationSeconds,omitempty"`
	SizeBytes       *int64     `json:"sizeBytes,omitempty"`
} // @name Recording

// StartRecordingRequest represents the request to start a new recording
type StartRecordingRequest struct {
	Label string `json:"label,omitempty"` // Optional custom label for the recording
} // @name StartRecordingRequest

// StopRecordingRequest represents the request to stop an active recording
type StopRecordingRequest struct {
	ID string `json:"id" validate:"required"` // Recording ID to stop
} // @name StopRecordingRequest

// ListRecordingsResponse represents the response containing all recordings
type ListRecordingsResponse struct {
	Recordings []RecordingDTO `json:"recordings"`
} // @name ListRecordingsResponse

func RecordingToDTO(r *recording.Recording) *RecordingDTO {
	return &RecordingDTO{
		ID:              r.ID,
		FileName:        r.FileName,
		FilePath:        r.FilePath,
		StartTime:       r.StartTime,
		EndTime:         r.EndTime,
		Status:          r.Status,
		DurationSeconds: r.DurationSeconds,
		SizeBytes:       r.SizeBytes,
	}
}
