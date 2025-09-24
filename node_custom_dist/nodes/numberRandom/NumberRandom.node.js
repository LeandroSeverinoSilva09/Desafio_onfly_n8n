"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberRandom = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class NumberRandom {
    constructor() {
        this.description = {
            displayName: 'Random',
            name: 'numberRandom',
            icon: 'file:random.svg',
            group: ['transform'],
            version: 1,
            description: 'Nó que gerar um numero aleatório dentro de um intervalo, esse número é gerado consultando uma API ',
            defaults: {
                name: 'Random',
                color: '#1A82e2',
            },
            inputs: ['main'],
            outputs: ['main'],
            properties: [
                {
                    displayName: 'Min',
                    name: 'Min',
                    type: 'number',
                    default: '',
                    description: 'Digite o número minimo para o intervalo',
                    required: true,
                },
                {
                    displayName: 'Max',
                    name: 'Max',
                    type: 'number',
                    default: '',
                    description: 'Digite o número máximo para o intervalo',
                    required: true,
                }
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        for (let i = 0; i < items.length; i++) {
            try {
                const min = this.getNodeParameter('Min', i);
                const max = this.getNodeParameter('Max', i);
                const resposta = await fetch(`https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`, { method: 'GET' });
                if (!resposta.ok) {
                    throw new Error(`Erro na requisição: ${resposta.status} - ${resposta.statusText}`);
                }
                const dadosText = await resposta.text();
                const dados = parseInt(dadosText, 10);
                returnData.push({
                    json: {
                        randomNumber: dados
                    }
                });
            }
            catch (error) {
                throw new n8n_workflow_1.NodeOperationError(this.getNode(), error);
            }
        }
        return [returnData];
    }
}
exports.NumberRandom = NumberRandom;
//# sourceMappingURL=NumberRandom.node.js.map