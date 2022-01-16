import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenTelemetryModule } from '@metinseylan/nestjs-opentelemetry';
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc';
import { Metadata, credentials } from '@grpc/grpc-js';

const metadata = new Metadata();
metadata.set('x-honeycomb-team', process.env.HONEYCOMB_TEAM);
metadata.set('x-honeycomb-dataset', process.env.HONEYCOMB_DATASET);

@Module({
  imports: [
    OpenTelemetryModule.forRoot({
      // disable metrics collection for now
      metricAutoObservers: [],
      spanProcessor: new SimpleSpanProcessor(
        new OTLPTraceExporter({
          url: 'grpc://api.honeycomb.io:443/',
          credentials: credentials.createSsl(),
          metadata,
        }),
      ),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
