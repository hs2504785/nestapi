import { Injectable } from '@nestjs/common';
import * as Pusher from 'pusher';

@Injectable()
export class PusherService {
  pusher: Pusher;
  constructor() {
    this.pusher = new Pusher({
      appId: '1233600',
      key: '6da8b4c72ac7d3771308',
      secret: '06c67be2936a8783fa93',
      cluster: 'mt1',
      useTLS: true,
    });
  }

  async trigger(channel: string, message: string, data: any) {
    await this.pusher.trigger(channel, message, data);
  }
}
