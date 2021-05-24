# Versioning

Every file we generate is versioned using the [semver](https://semver.org) convention. This allows us to migrate [saves](concepts/save) when updating the Resumik version. We write converters to achieve that. If we introduce a breaking change, these little tools are there to aid us in keeping everything in place. They are basically mappers - a translation layer between two incompatible versions. If we are unable to write a converter between two incompatible versions, we will make sure to release the next major version.

We use the semver to version our [CLI](/design/interfaces/cli) interface, too. After all, this is the API we expose to you. GUI interface is just a layer on top of that.
