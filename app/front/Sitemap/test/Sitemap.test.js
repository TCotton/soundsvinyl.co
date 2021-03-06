import React from 'react'
import Sitemap from '../sitemap'
import renderer from 'react-test-renderer'
import mockAxios from 'jest-mock-axios';
import { homeURI } from '../../../helper_constants'
import { mount } from 'enzyme';
import * as axios from "axios";
import '../../../../enzymeConfig';
const MockAdapter = require('axios-mock-adapter');
jest.unmock('axios');

describe( 'Component', () => {
	let component;
	let componentInstance;
	let result;

	const dataGetTags = [
		{
			_id: {
				_id: "5c131b787ee0194979fa1b27",
				name: "pop",
				date: "2018-12-14T02:54:48.933Z"
			},
			count: 1
		},
		{
			_id: {
				_id: "5c14f28ad7bfcfdc38a890c8",
				name: "folk",
				date: "2018-12-15T12:24:42.715Z"
			},
			count: 1
		},
		{
			_id: {
				_id: "5c14f28ad7bfcfdc38a890c9",
				name: "rock",
				date: "2018-12-15T12:24:42.715Z"
			},
			count: 1
		}
	]

	const dataGetAll = [
		{
			_id: "5c131b787ee0194979fa1b25",
			title: "The Crystals - He Hit Me (And It Felt Like A Kiss)",
			subTitle: "Philles Records, 1962",
			slug: "the-crystals-he-hit-me-(and-it-felt-like-a-kiss)",
			shortSlug: "ee787b131c5",
			videoLink: "https://04477e2a4d2b18bd4311-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/The-Crystals-He-Hit-Me-And%20It-Felt-Like-A-Kiss-1.mp4",
			categories: [
				{
					date: "2018-12-14T02:54:48.933Z",
					_id: "5c131b787ee0194979fa1b27",
					name: "pop"
				}
			],
			descriptionOne: "Several decades after it was first released, this song is still one of the most controversial singles ever released.",
			descriptionTwo: "There is, unfortunately, a whole sub-genre of misogynistic hip-hip songs, but this one single, released long before the hip-hop era, still retains its ability to shock in its casual attitude to violence against women.",
			descriptionThree: "Produced by Phil Spector in 1962, according to the Wikipedia entry: \"[Gerry] Goffin and [Carole] King wrote the song after discovering that their babysitter and singer Little Eva was being regularly beaten by her boyfriend. When they inquired why she tolerated such treatment, Eva replied, with complete sincerity, that her boyfriend’s actions were motivated by his love for her.\"",
			descriptionFour: "The chorus lyrics are \"He hit me and it felt like a kiss\", while the production is bubblegum pop that is typical of the Brill Building style. It is this odd dissonance that has intrigued ambitious documentary maker Adam Curtis, who has deployed He Hit Me (And It Felt Like A Kiss) on a number of occasions.",
			userId: "4edd40c86762e0fb12000003",
			date: "2018-12-14T02:54:48.930Z",
			updated: "2018-12-14T02:54:48.930Z",
			__v: 0
		},
		{
			_id: "5c131a627ee0194979fa1b21",
			title: "Primal Scream - Carry Me Home",
			subTitle: "Dixie-Narco EP, Creation Records, 1992",
			slug: "primal-scream-carry-me-home",
			shortSlug: "ee726a131c5",
			videoLink: "https://04477e2a4d2b18bd4311-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/primal-scream-carry-me-home-thursday-reoxdds.mp4",
			categories: [
				{
					date: "2018-12-15T12:24:42.715Z",
					_id: "5c14f28ad7bfcfdc38a890c9",
					name: "rock"
				},
				{
					date: "2018-12-15T12:24:42.715Z",
					_id: "5c14f28ad7bfcfdc38a890c8",
					name: "folk"
				}
			],
			descriptionOne: "Famously, it was Andrew Weatherall (under the guidance of the more experienced producer Hugo Nicolson) who steered Primal Scream away from their indie pop sound towards the euphoric accomplishment that was the 1991 album, Screamadelica.",
			descriptionTwo: "In the same period, but recorded separately from the album, were the four songs that made up the Dixie-Narco EP, one of which was a cover of a 1973 Brian Wilson demo, Carry Me Home.",
			descriptionThree: "In the hands of this band and these producers in 1992, it worked brilliantly. The cut on this site is about two minutes long, but it needs to be listened to in its entirety of five minutes and 12 seconds. It is only through listening to the whole song that its majestic achievement fully reveals itself. As William Blake wrote in Auguries of Innocence, so Primal Scream achieved in Carry Me Home: \"To see a World in a Grain of Sand And a Heaven in a Wild Flower Hold Infinity in the palm of your hand And Eternity in an hour.\"",
			userId: "4edd40c86762e0fb12000003",
			date: "2018-12-14T02:50:10.382Z",
			updated: "2018-12-15T12:24:42.714Z",
			__v: 0
		},
		{
			_id: "5c1319b07ee0194979fa1b1d",
			title: "Donovan & Jeff Beck Group - Barabajagal (Love Is Hot)",
			subTitle: "Epic, 1969",
			slug: "donovan-and-jeff-beck-group-barabajagal-(love-is-hot)",
			shortSlug: "ee70b9131c5",
			videoLink: "https://04477e2a4d2b18bd4311-3c9a18427a9da660b02129e57660202c.ssl.cf3.rackcdn.com/donavon-love-is-hot-thursday-recording.mp4",
			categories: [
				{
					date: "2018-12-15T12:21:13.886Z",
					_id: "5c14f1b9d7bfcfdc38a890c7",
					name: "psychedelic"
				},
				{
					date: "2018-12-15T12:21:13.886Z",
					_id: "5c14f1b9d7bfcfdc38a890c6",
					name: "psychedelia"
				}
			],
			descriptionOne: "Donavon was a Scottish singer/songwriter who undertook a musician’s apprenticeship, like Paul Simon, in a never-ending tour of the folk club network that existed in the UK in the first half of the 1960s. Later, he became closely associated with the psychedelic scene, joining the Beatles in their famous visit to the ashram of Maharishi Mahesh Yogi in Rishikesh in 1968.",
			descriptionTwo: "Donavon achieved commercial success in Europe and North America, but he lacked the songwriting talent that would have enabled him to transcend either the folk or psychedelic scenes. This meant that, as they went out of fashion, so did he, but perhaps more so because being a figurehead, he was on the receiving end of biting personal ridicule.",
			descriptionThree: "All of this makes this single Barabajagal even more of a mystery. Recorded with the Jeff Beck Group, this song must have come about by accident. He didn’t have the talent to plan such a musical achievement. The onbeat/offbeat structure to the drumming was closer to the emerging American funk sound than the psychedelia or folk he was part of, and a style he would have been entirely oblivious to at the time in the London freak circles he moved in.",
			descriptionFour: "But, however it came about, it is a masterpiece – a standout track in his hefty 1960s back catalogue.",
			userId: "4edd40c86762e0fb12000003",
			date: "2018-12-14T02:47:12.642Z",
			updated: "2018-12-15T12:21:13.879Z",
			__v: 0
		}
	]

		beforeEach( () => {
			component = renderer.create( <Sitemap /> )
		})

	describe( 'Sitemap', () => {

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'snapshot', () => {

			const sitemap = renderer
				.create(
					<Sitemap />
				)
				.toJSON();

			expect( sitemap ).toMatchSnapshot();
		});
	})

	describe( 'Sitemap initial state defaults', () => {

		beforeEach( () => {
			component = mount(
				<Sitemap />
			);

			componentInstance = component.instance();
			result = componentInstance.state;
		});

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'should return array for customPages', () => {
			expect( result.customPages ).toEqual( expect.any( Array ) );
		});

		it( 'should return null for error', () => {
			expect( result.error ).toEqual( null );
		});

		it( 'should return array for pages', () => {
			expect( result.pages ).toEqual( expect.any( Array ) );
		});
	});

	describe( 'Sitemap componentDidMount', () => {

		beforeEach( () => {
			component = mount(
				<Sitemap />
			);

			componentInstance = component.instance();
			result = componentInstance.state;
		});

		afterEach( () => {
			// cleaning up the mess left behind the previous test
			mockAxios.reset();
		});

		it( 'should be defined', () => {
			expect( component ).toBeDefined()
		})

		it( 'should return data from /apiV1/page/getTags get call ', () => {
			const mock = new MockAdapter(axios);
			mock.onGet(`${homeURI}/apiV1/page/getTags`).reply(200, dataGetTags);
			expect( result.customPages ).toEqual( expect.any( Array ) );
		});
	});
})
