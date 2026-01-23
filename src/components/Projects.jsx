import React from 'react';

const Projects = () => {
    return (
        <div className="quests-section">
            <h2 className="text-3xl mb-8 text-center">[ QUEST LOG ]</h2>

            <div className="mb-12">
                <h3 className="text-xl mb-4 text-[var(--term-green)] flicker">&gt;&gt; HACKATHON BOSSES</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="panel hover:bg-[var(--term-dim)] transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg group-hover:text-black">NEOLAND</h4>
                            <span className="text-xs border border-[var(--term-green)] px-1 group-hover:border-black group-hover:text-black">WINNER</span>
                        </div>
                        <p className="text-sm mb-3">NFT marketplace built from scratch on CARV SVM Network.</p>
                        <p className="text-xs mb-2">Rewards: 3rd Team's Choice, 1st Community Favorite</p>
                        <a href="https://github.com/AganFebro/neoland" target="_blank" className="text-xs">[ VIEW CODE ]</a>
                    </div>

                    <div className="panel hover:bg-[var(--term-dim)] transition-colors group">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg group-hover:text-black">PAYLAZOR</h4>
                            <span className="text-xs border border-[var(--term-dim)] px-1">TBA</span>
                        </div>
                        <p className="text-sm mb-3">A plug-n-play UI widget built on top of LazorKit SDK.</p>
                        <a href="https://github.com/AganFebro/paylazor" target="_blank" className="text-xs">[ VIEW CODE ]</a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-xl mb-4 text-[var(--term-green)] flicker">&gt;&gt; SIDE QUESTS</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <div className="panel">
                        <h5 className="mb-2">Forge-OCR</h5>
                        <p className="text-xs mb-2">OCR + auto-mining helper for Roblox.</p>
                        <a href="https://github.com/AganFebro/forge-ocr" className="text-xs">[ GITHUB ]</a>
                    </div>

                    <div className="panel">
                        <h5 className="mb-2">Kwitansi-Digital</h5>
                        <p className="text-xs mb-2">Android app to print receipts.</p>
                        <a href="https://github.com/AganFebro/Kwitansi-Digital" className="text-xs">[ GITHUB ]</a>
                    </div>

                    <div className="panel">
                        <h5 className="mb-2">CARV-Survey</h5>
                        <p className="text-xs mb-2">Community survey web app.</p>
                        <a href="https://github.com/AganFebro/CARV-Survey" className="text-xs">[ GITHUB ]</a>
                    </div>

                    <div className="panel">
                        <h5 className="mb-2">Gaming-Leaderboard</h5>
                        <p className="text-xs mb-2">Tournament leaderboard system.</p>
                        <a href="https://github.com/AganFebro/CARV-Gaming-Leaderboard" className="text-xs">[ GITHUB ]</a>
                    </div>

                    <div className="panel">
                        <h5 className="mb-2">Flask-Web</h5>
                        <p className="text-xs mb-2">Notes + Money management.</p>
                        <a href="https://github.com/AganFebro/flask-web" className="text-xs">[ GITHUB ]</a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Projects;
