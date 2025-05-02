const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');

class Scratch3DeepScratch {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'DeepScratch',
            name: 'AI Assistant',
            color1: '#29BEB0',
            blocks: [
                {
                    opcode: 'askAI',
                    blockType: BlockType.REPORTER,
                    text: 'ask DeepScratch [PROMPT]',
                    disableMonitor: true, // Required for async
                    arguments: {
                        PROMPT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello!'
                        }
                    }
                }
            ]
        };
    }

    async askAI(args) {
        const prompt = args.PROMPT;
        
        // Mock response (replace with real API call)
        return `You said: "${prompt}". [Add real API code below]`;
        
        /* REAL API CODE (UNCOMMENT AFTER SETTING UP BACKEND):
        try {
            const response = await fetch('http://localhost:3000/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt: prompt })
            });
            const data = await response.json();
            return data.reply;
        } catch (error) {
            return "Error connecting to AI!";
        }
        */
    }
}

module.exports = Scratch3DeepScratch;
