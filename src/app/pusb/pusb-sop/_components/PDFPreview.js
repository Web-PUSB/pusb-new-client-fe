"use client";

import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import {
  MoreActionsPopover,
  ToolbarSlot,
  ToolbarProps,
} from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

type RenderToolbarType = (
  Toolbar: React.ComponentType<ToolbarProps>,
) => JSX.Element;

interface PDFViewerProps {
  isEnglish: boolean;
}

const PDFViewer = ({ isEnglish }: PDFViewerProps) => {
  const renderToolbar: RenderToolbarType = (Toolbar) => (
    <Toolbar>
      {(toolbarSlot: ToolbarSlot) => {
        const {
          CurrentPageInput,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          Download,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = toolbarSlot;

        return (
          <div
            className="rpv-toolbar"
            role="toolbar"
            aria-orientation="horizontal"
          >
            <div className="rpv-toolbar__left">
              <div className="rpv-toolbar__item">
                <GoToPreviousPage />
              </div>
              <div className="rpv-toolbar__item">
                <CurrentPageInput />{" "}
                <span className="rpv-toolbar__label">
                  / <NumberOfPages />
                </span>
              </div>
              <div className="rpv-toolbar__item">
                <GoToNextPage />
              </div>
            </div>
            <div className="rpv-toolbar__center">
              <div className="rpv-toolbar__item">
                <ZoomOut />
              </div>
              <div className="rpv-toolbar__item">
                <Zoom />
              </div>
              <div className="rpv-toolbar__item">
                <ZoomIn />
              </div>
            </div>
            <div className="rpv-toolbar__right">
              <div className="rpv-toolbar__item">
                <Download />
              </div>
              <div className="rpv-toolbar__item">
                <MoreActionsPopover toolbarSlot={toolbarSlot} />
              </div>
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    renderToolbar,
    sidebarTabs: () => [],
  });

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="h-[80vh] w-[90%] border rounded shadow-lg overflow-hidden">
          <Viewer
            fileUrl={isEnglish ? "/pdf/sop-eng.pdf" : "/pdf/sop-indo.pdf"}
            plugins={[defaultLayoutPluginInstance]}
          />
        </div>
      </Worker>
    </div>
  );
};

export default PDFViewer;
