import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/PrismaModule';
import { AuthModule } from './modules/AuthModule';
import { UserModule } from './modules/UserModule';
import { ConfigModule } from '@nestjs/config';
import { AuctionItemModule } from './modules/AuctionItemModule';
import { ChatModule } from './modules/ChatModule';
import { AuctionStakeModule } from './modules/AuctionStakeModule';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    AuctionItemModule,
    ChatModule,
    AuctionStakeModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.development.env', '.env'],
    }),
  ],
})
export class AppModule {}
