<script>
  import { tick } from 'svelte';
  import Tooltip from './Tooltip.svelte';

  let value = '';
  function handleInput(e) {
    let v = e.target.value.toLowerCase();
    v = v.replace(/[^0-9z]/g, '');
    const parts = v.split('z'); // Enforce structure: digits + z + digits
    const first = parts[0]?.slice(0, 2) || '';
    const second = parts[1]?.slice(0, 2) || '';
    value = first + (v.includes('z') ? 'z' : '') + second;
  }
 
  function handleHashrateInput(e) {
    hashrateValue = '';
  }
 

  let wallet = '';
  let worker = '';
  let sharenote = '';
  let hashrate = '';
  let hashrateUnit = 'GH/s';
  let requiredHashrate = '';
  let showNote = true;
  let showRate = false;
  let isHidden = true;
  let passType = 0;
  let buildCommand = () => '';
  let copied = false;

  let sharenoteInput;
  let hashrateInput;

  let stratumUrl = 'stratum+tcp://hash2.cash:3333';
  let sUser = '';
  let sPass = '';

  async function showSharenote() {
    isHidden = true;
    passType = 0;
    showNote = true;
    showRate = false;
    await tick();
    sharenoteInput.focus();
  }

  async function showHashrate() {
    isHidden = true;
    passType = 1;
    showNote = false;
    showRate = true;
    await tick();
    hashrateInput.focus();
  }



  function getHashrate() {
    return '11.2 GH/s.';
  };

  function getSharenote() {
    return '33Z61';
  };

  const resetCopyState = async () => {
    copied = true;
    await tick();
    setTimeout(() => {
      copied = false;
    }, 2400);
  };

  const walletHandle = () => wallet.trim() || 'FLC_WALLET';
  const workerHandle = () => worker.trim() || 'Worker1';
  const sharenoteHandle = () => sharenote.trim().replace(/\s+/g, '') || '0';
  const hashrateHandle = () => hashrate || '0';

  const generateCommand = () => {
    isHidden = false;
    sUser = `${walletHandle()}.${workerHandle()}`;
    if(passType === 0){
      sPass = `sharenote:${sharenoteHandle()}`;

    } else if(passType === 1){
      sPass = `sharenote:${getSharenote()}`;
    }
    buildCommand = () => `${stratumUrl} -u ${walletHandle()}.${workerHandle()} -p ${sPass}`;
    
  };

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(buildCommand());
      resetCopyState();
    } catch (error) {
      console.error('Unable to copy miner settings', error);
    }
  };
</script>

<section id="generate">
  <div class="container">
    <div class="card generator">
      <div class="generator__intro">
        <div><span class="pill">Get Started</span></div>
        <h2>Generate your ready-to-use miner settings in seconds.</h2>
        <p class="hidden">
          Enter your wallet address and worker name, then set your <span class="btn1" on:click={showSharenote}>Target&nbsp;Sharenote</span> or <span class="btn1" on:click={showHashrate}>Hashrate</span> to generate a full connection command ready to paste into your miner.
        </p>

        <p>
          To get settings, enter your FLC address and worker name, then set a <span class="btn1" on:click={showSharenote}>Target&nbsp;Sharenote</span> or a <span class="btn1" on:click={showHashrate}>Hashrate</span>.
        </p>



        <div class="hidden">
          <p>To get settings, </p>
          <ul class="txt">
          <li>Enter your FLC address and worker name.</li>
          <li>Set your <span class="btn1" on:click={showSharenote}>Target Sharenote</span> or <span class="btn1" on:click={showHashrate}>Hashrate</span></li>
          </ul>
        </div>
        
      </div>

      <form class="generator__form" on:submit|preventDefault={generateCommand}>
        <div class="grid two">
          <div class="field">
            <label for="wallet">
              Your FLC Wallet Address
              <Tooltip text="Rewards are sent directly to this address.">
                <span class="tooltip">?</span>
              </Tooltip>
            </label>
            <span class="relat">
              <label for="wallet"><span class="icon flc"></span></label>
              <input
                id="wallet"
                name="wallet"
                type="text"
                class="p124"
                placeholder="FLC Address"
                spellcheck="false"
                bind:value={wallet}
                autocomplete="off"
                required
              />
            </span>
          </div>
          <div class="field">
            <label for="worker">
              Worker Name
              <Tooltip text="worker name help">
                <span class="tooltip">?</span>
              </Tooltip>
            </label>
            <input
              id="worker"
              name="worker"
              type="text"
              placeholder="rig1, homefarm01"
              bind:value={worker}
              autocomplete="off"
              required
            />
          </div>
        </div>

{#if showNote}
        <div class="grid two">
          <div class="field">
            <p class="hidden">You can set your Target Sharenote, or specify your Hashrate and we will recommend a sharenote you can print</p>
            <label for="sharenote">
              Target Sharenote
              <Tooltip text="target sharenote help">
                <span class="tooltip">?</span>
              </Tooltip>
            </label>
            
            <div>
              <input
                id="sharenote"
                name="sharenote"
                type="text"
                class="mw200"
                placeholder="e.g. 32z24"
                bind:value={sharenote}
                bind:this={sharenoteInput}
                spellcheck="false"
                autocomplete="off"
                on:input={handleInput}
                required
              />
            </div>
            <div class="hint pt-x1">
              <span>✨</span>
              <p>Use <a href="aa" target="_blank" class="btn1">Sharenote Print Planner</a> to calculate target sharenote you can print using a given hashrate.</p>
            </div>
          </div>
        </div>
{/if}

{#if showRate}
        <div class="grid two">
          <div class="field">
            <label for="hashrate">
              Average hashrate
              <Tooltip text="hashrate help">
                <span class="tooltip">?</span>
              </Tooltip>
            </label>
            
            <div>
              <input
                id="hashrate"
                name="hashrate"
                type="number"
                min="0"
                step="0.01"
                class="mw130"
                placeholder=""
                bind:value={hashrate}
                bind:this={hashrateInput}
                spellcheck="false"
                autocomplete="off"
                on:input={handleHashrateInput}
                required

              />
              <select class="mw100" id="hashrateUnit" bind:value={hashrateUnit}>
                <option>H/s</option>
                <option>kH/s</option>
                <option>MH/s</option>
                <option>GH/s</option>
                <option>TH/s</option>
                <option>PH/s</option>
                <option>EH/s</option>
              </select>
            </div>
          </div>
        </div>
{/if}

        <div class="hidden">
          <details class="noshad p0">
            <summary>Merged coins payout addresses</summary>
            <p class="mb-1">
              You can configure your payout addresses now, or adjust it later through the dashboard.
            </p>
            <div class="hiddena">
              <fieldset class="group grp4 mb-1">
                <div class="grid two wal">
                  <div class="field">
                    <span class="relat">
                      <label for="dogewallet"><span class="icon doge"></span></label>
                      <input
                        id="dogewallet"
                        name="dogewallet"
                        type="text"
                        class="p124"
                        placeholder="DOGE Address"
                        spellcheck="false"
                        autocomplete="off"
                      />
                    </span>
                  </div>
                  <div class="field">
                    <input
                      id="dogesig"
                      name="dogesig"
                      type="text"
                      placeholder="Signature"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset class="group grp4 mb-1">
                <div class="grid two wal">
                  <div class="field">
                    <span class="relat">
                      <label for="bellswallet"><span class="icon bells"></span></label>
                      <input
                        id="bellswallet"
                        name="bellswallet"
                        type="text"
                        class="p124"
                        placeholder="BELLS Address"
                        spellcheck="false"
                        autocomplete="off"
                      />
                    </span>
                  </div>
                  <div class="field">
                    <input
                      id="bellssig"
                      name="bellssig"
                      type="text"
                      placeholder="Signature"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset class="group grp4 mb-1">
                <div class="grid two wal">
                  <div class="field">
                    <span class="relat">
                      <label for="pepwallet"><span class="icon pep"></span></label>
                      <input
                        id="pepwallet"
                        name="pepwallet"
                        type="text"
                        class="p124"
                        placeholder="PEP Address"
                        spellcheck="false"
                        autocomplete="off"
                      />
                    </span>
                  </div>
                  <div class="field">
                    <input
                      id="pepsig"
                      name="pepsig"
                      type="text"
                      placeholder="Signature"
                      autocomplete="off"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </details>
        </div>


        <div class="center">
          <button class="btn primary w100btn br12" type="submit">Get Settings</button>
        </div>

      </form>

      <div class="output" class:hidden={isHidden}>
        <div class="note">
          <span class="info"></span>
          {#if showNote}
            To print {sharenote}, your average hashrate should be at least {getHashrate()}
          {/if}

          {#if showRate}
            At {hashrate} {hashrateUnit} average hashrate, you can print {getSharenote()} every ~5 s.
          {/if}
        </div>

        <div>
          <div class="setkey">Stratum URL</div>
          <div class="setvalue">
            <div class="setval">{stratumUrl}</div>
            <span class="setcopy"></span>
          </div>
          <div class="setkey">Username</div>
          <div class="setvalue">
            <div class="setval">{sUser}</div>
            <span class="setcopy"></span>
          </div>
          <div class="setkey">Password</div>
          <div class="setvalue">
            <div class="setval">{sPass}</div>
            <span class="setcopy"></span>
          </div>
        </div>
        
        <div class="relative"><pre><code id="command">{buildCommand()}</code></pre></div>
        <div class="output__header">
          <button class="btn secondary" type="button" on:click={copyCommand}>
            {#if copied}
              Copied!
            {:else}
              Copy
            {/if}
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  ul{
    padding-left:1.2rem;
  }
  .generator {
    display: grid;
    gap: 2.5rem;
    padding:7rem;
  }

  .generator__intro {
    display: grid;
    gap: 1rem;
  }

  .generator__form {
    display: grid;
    gap: 2rem;
  }

  .coin-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .coin-option {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    border-radius: 14px;
    border: 1px solid rgba(188, 206, 255, 0.8);
    background: rgba(255, 255, 255, 0.96);
    cursor: pointer;
    transition: border 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
  }

  .coin-option:hover {
    border-color: rgba(82, 136, 255, 0.6);
    box-shadow: 0 12px 24px -20px rgba(12, 46, 94, 0.35);
  }

  .coin-option.active {
    border-color: transparent;
    background: linear-gradient(135deg, rgba(82, 136, 255, 0.1), rgba(115, 208, 255, 0.18));
    box-shadow: 0 16px 30px -24px rgba(82, 136, 255, 0.7);
  }

  .coin-option input {
    width: 18px;
    height: 18px;
    accent-color: #1c4ed8;
  }

  .coin-option__visual {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
  }

  .coin-option__visual strong {
    display: block;
    font-size: 1rem;
    color: #0a1f33;
    line-height: 1.1;
  }

  .coin-option__visual small {
    display: block;
    font-size: 0.8rem;
    color: rgba(10, 31, 51, 0.55);
  }

  .coin-option input:checked + .coin-option__visual strong {
    color: #1c4ed8;
  }

  .grid.two {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .grid.wal{
    gap: 8px;
  }

  .field {
    display: grid;
    gap: 0.5rem;
  }

  .field label {
    font-weight: 600;
    color: rgba(10, 31, 51, 0.8);
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }

  .field__hint {
    font-size: 0.82rem;
    color: rgba(10, 31, 51, 0.55);
    margin-top: -0.35rem;
  }

  .optional {
    font-weight: 500;
    color: rgba(10, 31, 51, 0.45);
    font-size: 0.9rem;
  }

  .tooltip {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgba(82, 136, 255, 0.12);
    border: 1px solid rgba(82, 136, 255, 0.2);
    font-size: 0.75rem;
    color: #1c4ed8;
  }

  input, select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    padding: 0.75rem 1.05rem;
    border-radius: 12px;
    border: 1px solid rgba(188, 206, 255, 0.8);
    background: rgba(255, 255, 255, 0.95);
    color: #0a1f33;
    font-size: 1rem;
  }

  input:focus, select:focus {
    outline: 0;
  }

  select{
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 3px center;
    background-size: auto 80%;
    padding-right: 24px;
  }

  .output {
    display: grid;
    gap: 1rem;
    /* background: rgba(246, 248, 253, 0.92); */
    /* border: 1px solid rgba(188, 206, 255, 0.7); */
    /* border-radius: 16px; */
    /* padding: 1.5rem; */
  }

  .output__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }

  pre {
    background: #111827;
    color: #f9fafb;
    padding: 1.1rem 1.2rem;
    border-radius: 12px;
    font-size: 0.95rem;
    overflow-x: auto;
  }

  pre code {
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
  }

.relat{
  position:relative;
}


.p124{padding:12px 12px 12px 45px;}
.mw200{max-width:200px}
.mw130{max-width:130px}
.mw100{max-width:100px}
.pt-x1{margin-top:5px}
.relative{position:relative;overflow-x:auto;}


.group{
  background: #f5f7fc;
  background: linear-gradient(135deg, rgba(82, 136, 255, 0.12), rgba(249, 249, 249, 0.95));
  border: 0px solid rgba(188, 206, 255, 0.7);
  border-radius: 16px;
  padding: 14px;
}

.grp4{
  padding: 6px;
}

.btn1{
  font-weight:600;
  text-decoration:underline;
  color:#1c4ed8;
  cursor:pointer;
}

.setkey{
  text-transform: uppercase;
  font-size: 13px;
  color: #00000080;
}

.setvalue{
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.setval{
  font-weight: 600;
}

.setcopy{
  background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 2C2.895 2 2 2.895 2 4v14h2V4h14V2H4zM8 6C6.895 6 6 6.895 6 8v12c0 1.105.895 2 2 2h12c1.105 0 2-.895 2-2V8c0-1.105-.895-2-2-2H8zm0 2h12v12H8V8z' fill='rgb(84 143 255)'/%3E%3C/svg%3E");
  background-size: 100%;
  width:16px;height:16px;
  display:inline-block;
  cursor:pointer;
}

.note{
  background: #ccf8cc;
  color: #00000099;
  font-size: .9rem;
  padding: 1rem;
  border-radius: 10px;
  display:flex;
  align-items: center;
  gap: 6px;
}

.info{
  background:url('data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="24" height="24" stroke="none" fill="%23000000" opacity="0"/><g transform="matrix(1.43 0 0 1.43 12 12)" ><g style="" ><g transform="matrix(1 0 0 1 0 0)" ><circle style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="6.5" /></g><g transform="matrix(1 0 0 1 0 1.75)" ><line style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" x1="0" y1="-1.75" x2="0" y2="1.75" /></g><g transform="matrix(1 0 0 1 0 -2.5)" ><circle style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" cx="0" cy="0" r="0.5" /></g></g></g></svg>');
  background-size:100%;
  display:inline-block;
  width:16px;
  min-width: 16px;
  height:16px;
}

.hint{
  display:flex;
  gap:6px;
  font-size: 15px;
}

.pt5p{padding-top:4px}

.group legend{
  font-weight: 600;
  color: rgba(10, 31, 51, 0.8);
}



  @media (max-width: 640px) {
    .output__header {
      flex-direction: column;
      align-items: center;
    }

    .output__header button {
      width:100%;
    }

    .output__actions {
      flex-direction: column;
    }

    .generator {
      padding:1.4rem;
    }
  }
</style>
