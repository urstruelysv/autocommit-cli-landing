"use client";

import React from 'react';


const TryNowSection = () => {
  return (
    <section id="try-now" className="max-w-6xl w-full py-16 text-center px-4 md:py-20 lg:py-24">
      <h2 className="font-press-start-2p font-extrabold tracking-tight leading-[1.1] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] mb-12 bg-gradient-to-r from-red-tone-500 to-red-tone-600 bg-clip-text text-transparent">
        Try autocommit-cli Now!
      </h2>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-8">
        Get started with autocommit-cli in minutes. Follow these simple steps to integrate AI-powered commit messages into your workflow.
      </p>

      {/* Prerequisites */}
      <div className="mb-12 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white font-press-start-2p">Prerequisites</h3>
        <ul className="list-disc list-inside text-gray-400 font-vt323 text-base leading-relaxed">
          <li>Go (version 1.18 or higher recommended)</li>
          <li>Git (installed and configured)</li>
          <li>Gemini API Key: Obtain a free API key from Google AI Studio. Set it as an environment variable `GEMINI_API_KEY` or in a `.env` file.</li>
        </ul>
      </div>

      {/* Installation from Source */}
      <div className="mb-12 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white font-press-start-2p">Installation from Source (Development)</h3>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] font-vt323 text-base text-[#eee] overflow-x-auto">
          <pre className="whitespace-pre-wrap break-normal"><code>
            # Clone the repository<br />
            $ git clone https://github.com/urstruelysv/autocommit-cli.git<br />
            $ cd autocommit-cli<br />
            <br />
            # Set up API Key (Option 1: Export as environment variable)<br />
            $ export GEMINI_API_KEY="YOUR_GEMINI_API_KEY"<br />
            <br />
            # OR (Option 2: Create a .env file)<br />
            $ echo 'GEMINI_API_KEY="YOUR_GEMINI_API_KEY"' &gt; .env<br />
            # Then load it (e.g., using a tool like `direnv` or manually `source .env`)<br />
            <br />
            # Run the application<br />
            $ go run cmd/autocommit-cli/main.go
          </code></pre>
        </div>
      </div>

      {/* Building and Installing the Executable */}
      <div className="mb-12 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white font-press-start-2p">Building and Installing the Executable</h3>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] font-vt323 text-base text-[#eee] overflow-x-auto">
          <pre className="whitespace-pre-wrap break-normal"><code>
            # Clone the repository<br />
            $ git clone https://github.com/urstruelysv/autocommit-cli.git<br />
            $ cd autocommit-cli<br />
            <br />
            # Run the build script<br />
            $ chmod +x build.sh<br />
            $ ./build.sh
          </code></pre>
        </div>
        <p className="text-gray-400 font-vt323 text-sm mt-2">This will build the application and install it in your `/usr/local/bin` directory.</p>
      </div>

      {/* CLI Usage */}
      <div className="mb-12 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-white font-press-start-2p">CLI Usage</h3>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
          When you run the application, you will be prompted to select a mode of operation:
        </p>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] font-vt323 text-base text-[#eee] overflow-x-auto mb-4">
          <pre className="whitespace-pre-wrap break-normal"><code>
            $ autocommit-cli<br />
            Select a mode to run autocommit-cli (default: AI-Commit):<br />
            1. AI-Commit (default) - Use AI to generate commit messages.<br />
            2. Normal - Create commits without AI.<br />
            3. Review - Inspect commits before they are made.<br />
            4. No-push - Create commits but do not push them to the remote repository.<br />
            5. CI - Non-interactive, deterministic execution for CI environments.<br />
            6. Verbose - Enable verbose output for debugging purposes.<br />
            Enter your choice (1-6, or press Enter for default):
          </code></pre>
        </div>
        <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4">
          For non-interactive environments like CI/CD pipelines, you can use the `--ci` flag:
        </p>
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333] font-vt323 text-base text-[#eee] overflow-x-auto">
          <pre className="whitespace-pre-wrap break-normal"><code>
            $ autocommit-cli --ci
          </code></pre>
        </div>
      </div>

      {/* Call to Action */}
      <a href="https://github.com/urstruelysv/autocommit-cli" target="_blank" rel="noopener noreferrer"
         className="px-8 py-3 rounded-lg font-bold text-white
                    text-sm md:text-base
                    bg-red-tone-500 border border-red-tone-500
                    transition-all duration-300
                    hover:bg-red-tone-600 hover:border-red-tone-600
                    hover:shadow-[0_0_25px_rgba(239,68,68,0.4)]
                    hover:scale-[1.03]">
        View on GitHub
      </a>
    </section>
  );
};

export default TryNowSection;