// components/Loader.js
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <style jsx>{`
        .preloader {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: rgba(255, 255, 255, 0.8);
          z-index: 9999;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #3498db;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
