import { describe, test, expect, vi } from 'vitest';
import { embedReact } from './main';
import { JSDOM } from 'jsdom';
import { waitFor } from '@testing-library/dom';

describe('main.tsx', () => {

  test('should call to createRoot with jsdom and contain react nodes', async () => {
    vi.mock('./main', { spy: true })

    const dom = new JSDOM(`
    <body>
      <div id="root"></div>
    </body>  
    `);
    embedReact(dom.window.document)
    expect(dom.window.document.getElementById('root')).toBeTruthy()
    expect(embedReact).toBeCalled()
    expect(embedReact).toHaveReturned()
    await waitFor(() => expect(dom.window.document.getElementsByTagName('h1').length).toBe(1))
  });

  //Root node not found
  test.skip('should call to createRoot with fragment document and contain react nodes', async () => {
    vi.mock('./main', { spy: true })

    const fragment = document.implementation.createDocument(null, null, null)
    const body = document.createElement('body')
    const root = document.createElement('div')
    root.id = 'root'
    fragment.appendChild(body)
    body.appendChild(root)

    embedReact(fragment)
    expect(fragment.getElementById('root')).toBeTruthy()
    expect(embedReact).toBeCalled()
    expect(embedReact).toHaveReturned()
    await waitFor(() => expect(document.getElementsByTagName('h1').length).toBe(1))
  });

  //Skipping to load script or not loading it
  test.skip('should create jsdom and add react nodes', async () => {
    const dom = new JSDOM(`
    <body>
      <div id="root"></div>
      <script type="module" src="/src/main.tsx"></script>
    </body>  
    `, { runScripts: "dangerously", resources: "usable"});
    expect(dom.window.document.getElementById('root')).toBeTruthy()
    await waitFor(() => expect(dom.window.document.getElementsByTagName('h1').length).toBe(1))
  });

});