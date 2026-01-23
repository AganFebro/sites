import React from 'react';

const Experience = () => {
    return (
        <div className="experience-section">
            <h2 className="text-3xl mb-6 text-center text-shadow">[ CHAR STATS & SKILLS ]</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {/* EXP Column */}
                <div>
                    <h3 className="text-xl mb-4 border-b-2 border-[var(--term-green)]">Experience Log</h3>

                    <div className="panel mb-4">
                        <h4 className="text-lg mb-2 text-[var(--term-green)]">
                            <a href="https://carv.io/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--term-green)] border-b-2 border-dashed border-[var(--term-green)]">CARV</a>
                        </h4>
                        <p className="text-xs mb-2">Indonesia Community Moderator</p>
                        <p className="text-xs text-[var(--term-dim)]">Feb 2024 - Jan 2026</p>
                        <ul className="list-disc pl-4 mt-2 text-sm leading-relaxed">
                            <li>Handling CARV product supports in global/regional community.</li>
                            <li>Grew Indonesia Discord to top 3 most active global CARV communities.</li>
                            <li>Hosted daily live events (game nights, quizzes).</li>
                            <li>Owned conflict resolution & escalation handling.</li>
                            <li>Produced gaming-related videos for campaigns.</li>
                            <li>Built community tools (survey webapps, tourney registration).</li>
                        </ul>
                    </div>

                    <div className="panel">
                        <h4 className="text-lg mb-2 text-[var(--term-green)]">
                            <a href="https://www.anitya.space/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--term-green)] border-b-2 border-dashed border-[var(--term-green)]">anitya</a>
                        </h4>
                        <p className="text-xs mb-2">Ambassador</p>
                        <p className="text-xs text-[var(--term-dim)]">Aug 2025 - Sep 2025</p>
                        <ul className="list-disc pl-4 mt-2 text-sm leading-relaxed">
                            <li>Designed 3D gamified experience within Anitya ecosystem.</li>
                            <li>Promoted awareness through consistent content on X (Twitter).</li>
                        </ul>
                    </div>
                </div>

                {/* Skills Column */}
                <div>
                    <h3 className="text-xl mb-4 border-b-2 border-[var(--term-green)]">Skill Tree</h3>

                    <div className="panel">
                        <div className="skill-item mb-4">
                            <h5 className="mb-1 text-sm md:text-base">Community Moderation</h5>
                            <div className="w-full bg-[var(--term-dim)] h-2">
                                <div className="bg-[var(--term-green)] h-2" style={{ width: '95%' }}></div>
                            </div>
                            <p className="text-sm mt-1">Discord/Telegram management, Conflict Handling</p>
                        </div>

                        <div className="skill-item mb-4">
                            <h5 className="mb-1 text-sm md:text-base">Events & Engagement</h5>
                            <div className="w-full bg-[var(--term-dim)] h-2">
                                <div className="bg-[var(--term-green)] h-2" style={{ width: '90%' }}></div>
                            </div>
                            <p className="text-sm mt-1">Hosting live games, podcasts, AMA</p>
                        </div>

                        <div className="skill-item mb-4">
                            <h5 className="mb-1 text-sm md:text-base">Growth & Social</h5>
                            <div className="w-full bg-[var(--term-dim)] h-2">
                                <div className="bg-[var(--term-green)] h-2" style={{ width: '85%' }}></div>
                            </div>
                            <p className="text-sm mt-1">Content coordination, onboarding support</p>
                        </div>

                        <div className="skill-item mb-4">
                            <h5 className="mb-1 text-sm md:text-base">Product Support</h5>
                            <div className="w-full bg-[var(--term-dim)] h-2">
                                <div className="bg-[var(--term-green)] h-2" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-sm mt-1">Explaining how-to into end users, answering question related to a product.</p>
                        </div>

                        <div className="skill-item mb-4">
                            <h5 className="mb-1 text-sm md:text-base">Content & Media</h5>
                            <div className="w-full bg-[var(--term-dim)] h-2">
                                <div className="bg-[var(--term-green)] h-2" style={{ width: '75%' }}></div>
                            </div>
                            <p className="text-sm mt-1">Streams event on Discord and Twitch, video editing, photo editing.</p>
                        </div>
                    </div>
                </div>

                <h3 className="text-xl mb-4 border-b-2 border-[var(--term-green)]">Languages</h3>
                <div className="panel">
                    <div className="skill-item">
                        <p className="text-base">Indonesia (Native)</p>
                        <p className="text-base">English (Fluent)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
