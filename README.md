On first start, you will see a flavor selection screen. If you want to see this again, remove the `config` `mods` and `defaultconfigs` folders, and delete `.unsup-state.json`. Then on your next launch, you will be presented with the flavor selection screen as if it was a fresh install.

# How to install

Import the unsup Prismlauncher component into an empty instance on version `1.19.2` with fabric installed (unsup can change the fabric version, so dont worry about getting the correct version)
<details>
<summary>How to install a custom component</summary>
<br>
Create an empty component with the UID of <code>com.unascribed.unsup</code> with the following contents:
<pre><code>
{
  "formatVersion": 1,
  "name": "unsup",
  "uid": "com.unascribed.unsup",
  "version": "1.1.3",
  "+agents": [
    {
      "name": "com.unascribed:unsup:1.1.3",
      "url": "https://repo.sleeping.town"
    }
  ]
}
</code></pre>
You can save this component file for later by copying it from <code>&lt;INST_DIR&gt;/patches</code> to the central mods folder, then you can just click import component and select the component json.
</details>

And add the following java arguments:

```
-Dunsup.bootstrapUrl="https://raw.githubusercontent.com/p1x3l101-10/hex/refs/heads/main/unsup.ini" -Dunsup.bootstrapKey="signify RWRBgYcfobPE7I7STPLaQnp69F06aqQaBSWk0AuUFKlUoCyE6VUZKxJv"
```

The prebuilt version has the arguments as a component, so it should be pretty plug and play

---

NOTE: Bootstrap URLs require unsup 1.1.3 or higher to use

NOTE 2: If you just want a bootstrap pack instead, ask me ig.
