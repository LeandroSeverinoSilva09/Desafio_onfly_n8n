import { INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
export declare class NumberRandom implements INodeType {
    description: INodeTypeDescription;
    execute(this: any): Promise<INodeExecutionData[][]>;
}
