# openshift-bosh
Run the [node-xmpp-bosh](https://github.com/dhruvbird/node-xmpp-bosh) BOSH gateway on OpenShift.

This is a simple wrapper that runs the node-xmpp-bosh gateway with the OpenShift nodejs-0.10
cartridge. It can be deployed with a single command:

    rhc app-create bosh nodejs-0.10 --from-code https://github.com/rhashimoto/openshift-bosh.git

The BOSH gateway can then be accessed via the URLs (substituting appropriately for `<domain>`:

    http://bosh-<domain>.rhcloud.com/
    https://bosh-<domain>.rhcloud.com/
