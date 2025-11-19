import React from 'react';

const RoadmapChild = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="relative p-3 bg-[#0d1117]/90 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
                <div className="relative overflow-hidden rounded-xl" style={{ paddingTop: "56.25%" }}>
                    <iframe
                        src="https://roadmap.sh/r/embed?id=68e654b31d72874d102728f1"
                        title="FP Roadmap"
                        className="absolute top-0 left-0 w-full h-full border-0 rounded-xl"
                        style={{
                            filter: "invert(1) hue-rotate(60deg)", 
                        }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default RoadmapChild;