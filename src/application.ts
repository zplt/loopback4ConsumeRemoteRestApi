import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {GorestServiceBinding, JsonPlaceHolderBinding, VirustotalBinding} from './binding/keys';
import {ConsumeRestProvider, JsonplaceholderProvider, VirustotalProvider} from './services';


export {ApplicationConfig};

export class ConnectorApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    //remote service Binding
    this.bind(GorestServiceBinding.GOREST_GO_REMOTE_SERVICE_PROVIDER).toProvider(ConsumeRestProvider)
    //remote service virustotal
    this.bind(VirustotalBinding.VIRUS_TOTAL_SERVICE_PROVIDER).toProvider(VirustotalProvider)
    //remote service jsonplaceholder
    this.bind(JsonPlaceHolderBinding.JSON_PLACE_HOLDER_PROVIDER).toProvider(JsonplaceholderProvider)

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }
}
