// now in it's own file

// so our famous map to generate the code 
// class is a reserved word was the lesson of yesterday... also the `` are pretty amazing in allowing the mizture of code
// html, interesting # to take us inside the doc
// ok so we have the hash change to show inner info
const render = ({ departments, classMap, departmentList, curr })=> {
    const html = `
        ${ departments.map( (department, idx) => `
        <li>
            <a href='#${ idx }'>${ department }</a>
            ${
                curr === idx ? `
                <ul>
                ${ 
                    classMap[department].map ( fyou =>
                    `<li> ${ fyou } </li>`
                    ).join('')
                }
                </ul>
                ` : ''
            }
            `).join('') }
        </li>
        `;
        // console.log(html);
        // console.log(departmentList);
        departmentList.innerHTML = html;
}

// we are only exporting one thing 
module.exports = render;