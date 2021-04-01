import React from 'react';
import Layout from '@theme/Layout';

import CodeBlock from '@theme/CodeBlock';

import Collapsible from '@site/src/components/collapsible';
import File from '@site/src/components/file';
import Lightbox from '@site/src/components/lightbox';

function Styles() {
  return (
    <Layout permalink="/">
        <div className="container">
            <div className='section' style={{marginTop: '40px'}}>
                <p>
                The following components are baked into the Markdown compilation context,
                so there is no need to import them from Markdown files. Simply add the components
                inline to use them.
                </p>
            </div>
            <div className='section' style={{marginTop: '40px'}}>
                <h1>Linked Markdown Code Blocks</h1>
<pre>{`
\`\`\`
[view the license](license)
\`\`\`
`}</pre>
            <CodeBlock>
[view the license](license)
            </CodeBlock>
            <br/>
            <p>Use a backslash to escape linking:</p>
<pre>{`
\`\`\`yml
description: "this is \\[an escaped link](docs.getdbt.com)"
\`\`\`
`}</pre>
            <CodeBlock>
description: "this is \[an escaped link](docs.getdbt.com)"
            </CodeBlock>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>Collapsible</h1>
<pre>{`<Collapsible header="The header info">
    <div>
        <p>Shows and hides children elements</p>
    </div>
</Collapsible>
`}</pre>
                <Collapsible header="The header info">
                    <div>
                        <p>Shows and hides children elements</p>
                    </div>
                </Collapsible>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>File</h1>
<pre>{`<File name="~/.dbt/profiles.yml">

\`\`\`yml
password: hunter2
\`\`\`


</File>
`}</pre>
                <File name="~/.dbt/profiles.yml">
                    <pre>
                        password: hunter2
                    </pre>
                </File>
            </div>

            <div className='section' style={{marginTop: '40px'}}>
                <h1>Lightbox</h1>
                <pre>{`<Lightbox src="/img/dbt-logo-full.png" title="The dbt logo" />`}</pre>
                <Lightbox src="/img/dbt-logo-full.png" title="The dbt logo" />
            </div>

        </div>
    </Layout>
  );
}

export default Styles;
