const Default = () => {
    return (
        <div className="container" id="container">
            <div className="py-2 mb-2">
                <h1 className="display-4 font-weight-bolder text-uppercase text-hide">
                    Jeff Novello is a Con Man
                </h1>
                <p className="lead">Jeff Novello, of Executive Business Solutions, and Mailfly inc., is a con man who has defrauded my family out of our retirement money.</p>
                </div>
                
                <hr className="my-4" />
                <h2 className="font-weight-bolder text-uppercase">These are 2 of his fraudulent businesses:</h2>
                <ul>
                <li className="font-italic"><a href="https://www.ripoffreport.com/reports/specific_search/jeff%20novello" target="_blank" rel="noopener">Executive Business Solutions</a></li>
                <li className="font-italic"><a href="https://www.bizapedia.com/people/jeff-novello.html" target="_blank" rel="noopener">Mailfly Creations</a></li>
                </ul>
                <h3>He also owns:</h3>
                <ul>
                <li className="font-italic"><a href="https://www.bizapedia.com/az/the-dance-hub-llc.html" target="_blank" rel="noopener">The Dance Hub</a></li>
                </ul>
                <h2 className="font-weight-bolder text-uppercase">Here's how his scam worked:</h2>
                <ul>
                <li>He scoured the internet to find me and my Amazon affiliate website and contacted me via email and phone.</li>
                <li>He offered to increase traffic to my website via various fake optimization techniques.</li>
                <li>After I paid him, he did nothing with my website. He slowly payed me back with my own money to make it appear as though the sales are increasing.</li>
                <li>After the apperance of short terms success, he convinced me to invest in other fradulent ventures of his.</li>
                <li>After I invested large sums of money in his secondary business, he started to make excuses as to why the company was performing poorly, in order to squeeze out as much money out of me as possible.</li>
                <li>After I realized that I had been scammed, it was too late. I had been bled dry of my retirement.</li>
                </ul>

                <h3 className="font-weight-bolder text-uppercase">What to do if you've been scammed by Jeff Novello</h3>
                <p>It is important that you contact the authorities to get a record of how Jeff Novello has defrauded you. Even if your money cannot be recovered, this will put his name on their radar. The courts will also look poorly upon him in a civil suit if there are pending FBI complaints against him.</p> 
                <ul>
                <li>You can make an internet crime complaint online here: <a href="https://www.ic3.gov/default.aspx" target="_blank" rel="noreferrer noopener">https://www.ic3.gov/default.aspx</a></li>
                <li>You should also make a complaint with the Maricopa County Sherrifs Dept. here: <a href="https://www.mcso.org/" target="_blank" rel="noreferrer noopener">https://www.mcso.org/</a></li>
                </ul>

                <h3>Links:</h3>
                <ul>
                <li><a href="https://www.facebook.com/jeff.novello" target="_blank" rel="noopener nofollow">Jeff Novello</a></li>
                <li><a href="https://www.ripoffreport.com/reports/executive-business-solutions-llc/san-tan-valley-arizona-85140/executive-business-solutions-llc-jeff-novello-jeffrey-novello-scammed-me-for-850000-sa-1473959" target="_blank" rel="noopener">Ripoff Report 1</a></li>
                <li><a href="https://www.ripoffreport.com/reports/executive-business-solutions-llc/san-tan-valley-arizona-85140/executive-business-solutions-llc-jeff-novello-had-contract-with-them-to-pay-a-guaranteed-1465149">Ripoff Report 2</a></li>
                <li><a href="https://www.ripoffreport.com/reports/executive-business-solutions/san-tan-valley-arizona-85140/executive-business-solutions-jeff-novello-effective-business-solutions-are-a-group-of-rip-1467853">Ripoff Report 3</a></li>
                </ul>

                <div>
                <h3>Questions/Comments?</h3>
                <form name="contact" method="POST" data-netlify="true">
                    <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Your Email address</label>
                    <input type="email" className="form-control" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                    <label htmlFor="comment">Your question/comment</label>
                    <textarea className="form-control" id="comment" rows={3} name="comment" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Default;