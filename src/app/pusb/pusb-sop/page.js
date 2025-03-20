import React, { useState, useEffect, useMemo } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import {
  MoreActionsPopover,
  ToolbarSlot,
} from "@react-pdf-viewer/toolbar";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PDFViewer = ({ isEnglish }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading time
    return () => clearTimeout(timer); // ✅ Cleanup to avoid state inconsistencies
  }, [isEnglish]);

  // Memoize the worker URL to avoid recreating it on every render
  const workerUrl = useMemo(
    () => "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js",
    []
  );

  // Memoize the defaultLayoutPlugin to avoid unnecessary re-creation
  const defaultLayoutPluginInstance = useMemo(
    () =>
      defaultLayoutPlugin({
        renderToolbar: (Toolbar) => (
          <Toolbar>
            {(toolbarSlot) => {
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
                  {/* Left Section */}
                  <div className="rpv-toolbar__left">
                    <div className="rpv-toolbar__item">
                      <GoToPreviousPage />
                    </div>
                    <div className="rpv-toolbar__item">
                      <CurrentPageInput />
                      <span className="rpv-toolbar__label">
                        / <NumberOfPages />
                      </span>
                    </div>
                    <div className="rpv-toolbar__item">
                      <GoToNextPage />
                    </div>
                  </div>

                  {/* Center Section */}
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

                  {/* Right Section */}
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
        ),
        sidebarTabs: () => [], // No sidebar
      }),
    []
  );

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-100">
      {loading ? (
        <div className="text-gray-500">Loading PDF...</div>
      ) : (
        <Worker workerUrl={workerUrl}>
          <div className="h-[80vh] w-[90%] border rounded shadow-lg overflow-hidden">
            <Viewer
              fileUrl={isEnglish ? "/pdf/sop-eng.pdf" : "/pdf/sop-indo.pdf"}
              plugins={[defaultLayoutPluginInstance]}
              onError={(error) =>
                console.error("Failed to load PDF:", error)
              }
            />
          </div>
        </Worker>
      )}
    </div>
  );
};

export default PDFViewer;
