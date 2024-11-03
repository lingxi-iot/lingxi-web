import mitt,{type Emitter} from "mitt" 
import { EventState, RenderEvents } from "./common/event";

export class EventBus {
    private emitter: Emitter<RenderEvents> = mitt<RenderEvents>();
    private eventState:EventState = EventState.IDLE;
    public on: Emitter<RenderEvents>['on']
    public off: Emitter<RenderEvents>['off']
    public emit: Emitter<RenderEvents>['emit'];
    constructor() {
        
    }
    public init(emitter:Emitter<RenderEvents>) {
        this.emitter = emitter;
        this.on = this.emitter.on.bind(emitter)
        this.off = this.emitter.off.bind(emitter)
        this.emit = this.emitter.emit.bind(emitter)
        this.eventState = EventState.INIT
    }
    public getEventState() {
        return this.eventState
    }
    
}