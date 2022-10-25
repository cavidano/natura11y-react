import React, { useRef, useState, useEffect } from 'react';

const TableScroll = ( props ) => {

    const {
        tableCaption = 'Table Caption'
    } = props;

    const [scrollable, setScrollable] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollElement = useRef();
    const scrollTarget = useRef();

    let maxWidth;
    let scrollWidth;

    const checkWidths = () =>{
    
        maxWidth = scrollElement.current.offsetWidth;
        scrollWidth = scrollTarget.current.scrollWidth;

        scrollWidth > maxWidth
            ? setScrollable(true)
            : setScrollable(false);
    }

    useEffect(() => {

        window.addEventListener('resize', checkWidths);

        return () => {
            window.removeEventListener('click', checkWidths);
        }

    }, []);

    useEffect(() => {

        checkWidths();
    
    }, [scrollable]);

    const scrollHandler = () => {

        let scrollPosition = scrollTarget.current.scrollLeft;
        console.log(scrollPosition);

        scrollPosition > 1
            ? setIsScrolling(true)
            : setIsScrolling(false);
    }

	return (
		<div
            className='table-scroll'
            data-scroll={scrollable ? true : false}
            ref={scrollElement}
        >
			<small className='table-scroll__help'>Scroll to see whole table</small>

			<div
				ref={scrollTarget}
				className='table-scroll__container'
                data-scrolling={isScrolling ? true : false}
				onScroll={scrollHandler}
			>
				<table className='table'>
                
					<caption>{tableCaption}</caption>

					<thead>
						<tr>
							<th scope='col'>Name</th>
							<th scope='col'>Country</th>
							<th scope='col'>Coordinates</th>
							<th className='text-align-right' scope='col'>
								Map View
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Giant's Causeway</td>
							<td>Northern Ireland</td>
							<td>55°14'27″N 6°30'42″W</td>
							<td className='text-align-right'>
								<a href='#1'>Map View</a>
							</td>
						</tr>
						<tr>
							<td>Fingal's Cave</td>
							<td>Scotland</td>
							<td>56°26'02″N 6°20'10″W</td>
							<td className='text-align-right'>
								<a href='#1'>Map View</a>
							</td>
						</tr>
						<tr>
							<td>Garni Gorge</td>
							<td>Armenia</td>
							<td>40°11'N 44°31'E</td>
							<td className='text-align-right'>
								<a href='#1'>Map View</a>
							</td>
						</tr>
						<tr>
							<td>Cape Raoul</td>
							<td>Tasmania</td>
							<td>43°12'04″S 147°45'48″E</td>
							<td className='text-align-right'>
								<a href='#1'>Map View</a>
							</td>
						</tr>
						<tr>
							<td>Svartifoss</td>
							<td>Iceland</td>
							<td>64.023°N 16.975°W</td>
							<td className='text-align-right'>
								<a href='#1'>Map View</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableScroll;