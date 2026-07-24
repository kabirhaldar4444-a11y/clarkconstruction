import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  ZoomIn, 
  ZoomOut, 
  Printer
} from 'lucide-react';
import Button from './Button';

export default function PdfViewer({ 
  fileUrl, 
  fileName = "CLARK CONSTRUCTION.pdf", 
  fileSize = "198 KB", 
  title = "MoHUA & Clark Construction Memorandum of Understanding",
  subtitle = "Official Strategic Partnership Agreement Document"
}) {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 20, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 20, 60));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handlePrint = () => {
    if (fileUrl) {
      const printWindow = window.open(fileUrl, '_blank');
      if (printWindow) {
        printWindow.focus();
        printWindow.print();
      }
    }
  };

  return (
    <div 
      ref={containerRef}
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        borderRadius: '8px',
        boxShadow: isFullscreen ? 'none' : 'var(--shadow-premium)',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        position: isFullscreen ? 'fixed' : 'relative',
        top: isFullscreen ? 0 : 'auto',
        left: isFullscreen ? 0 : 'auto',
        right: isFullscreen ? 0 : 'auto',
        bottom: isFullscreen ? 0 : 'auto',
        width: isFullscreen ? '100vw' : '100%',
        height: isFullscreen ? '100vh' : 'auto',
        zIndex: isFullscreen ? 999999 : 1,
        transition: 'all 0.3s ease'
      }}
    >
      {/* Top Header & Toolbar */}
      <div style={{
        backgroundColor: 'var(--bg-deep)',
        borderBottom: '1px solid var(--border-color)',
        padding: '16px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px'
      }}>
        {/* File Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            width: '42px',
            height: '42px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <FileText size={22} color="#EF4444" />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h4 style={{ color: 'var(--text-white)', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
                {fileName}
              </h4>
              <span style={{
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: 'var(--success)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '0.65rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Verified PDF
              </span>
            </div>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'block', marginTop: '2px' }}>
              {subtitle} • {fileSize}
            </span>
          </div>
        </div>

        {/* Toolbar Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          {/* Zoom Controls */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            padding: '2px 6px'
          }}>
            <button
              onClick={handleZoomOut}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Zoom Out"
            >
              <ZoomOut size={15} />
            </button>
            
            <span 
              onClick={handleResetZoom}
              style={{
                color: 'var(--text-white)',
                fontSize: '0.75rem',
                fontWeight: 600,
                padding: '0 8px',
                cursor: 'pointer',
                userSelect: 'none'
              }}
              title="Click to reset zoom"
            >
              {zoomLevel}%
            </span>

            <button
              onClick={handleZoomIn}
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text-primary)',
                border: 'none',
                padding: '6px',
                cursor: 'pointer',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}
              title="Zoom In"
            >
              <ZoomIn size={15} />
            </button>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handlePrint}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-white)',
              padding: '7px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
            title="Print Document"
          >
            <Printer size={15} />
          </button>

          <button
            onClick={toggleFullscreen}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-white)',
              padding: '7px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.75rem',
              fontWeight: 600
            }}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen View"}
          >
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </button>

          <Button 
            href={fileUrl} 
            download={fileName} 
            variant="primary" 
            size="sm" 
            icon={Download} 
            iconPosition="left"
          >
            Download
          </Button>
        </div>
      </div>

      {/* Main View Area */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: isFullscreen ? 'calc(100vh - 75px)' : '750px',
        backgroundColor: 'var(--bg-deep)',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        {/* Native PDF Object / Embed container with dynamic zoom scale */}
        <div style={{
          width: '100%',
          height: '100%',
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: 'top center',
          transition: 'transform 0.2s ease',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <object
            data={`${fileUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            type="application/pdf"
            width="100%"
            height="100%"
            style={{ border: 'none', flexGrow: 1 }}
          >
            {/* Fallback iframe inside object if browser doesn't handle <object> */}
            <iframe
              src={`${fileUrl}#toolbar=1`}
              title={title}
              width="100%"
              height="100%"
              style={{ border: 'none' }}
            >
              <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p>Your browser does not support embedded PDF viewing.</p>
                <a href={fileUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 700 }}>
                  Click here to open and download the PDF directly.
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>

      {/* Footer bar */}
      <div style={{
        backgroundColor: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-color)',
        padding: '12px 20px',
        display: 'flex',
        justify: 'space-between',
        alignItems: 'center',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <span>Trouble loading the embedded PDF?</span>
        <a 
          href={fileUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ color: 'var(--primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}
        >
          Open Original PDF in New Tab <ExternalLink size={12} />
        </a>
      </div>
    </div>
  );
}
