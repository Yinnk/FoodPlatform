import React, { useState } from 'react';
import { Form, Accordion, Button, Container } from 'react-bootstrap';
import { restaurants } from '../data/Restaurant.js';

export function FilterOptions({ setFilteredRestaurants, allRestaurants }) {
    const [filters, setFilters] = useState({
        vegan: '',
        glutenFree: '',
        halal: '',
        nutFree: '',
        location: '',
        priceRange: ''
    });

    // Realistic low-income / food desert locations in WA
    const lowIncomeLocations = [
        "Tukwila", 
        "SeaTac", 
        "White Center", 
        "Kent", 
        "Everett", 
        "Renton", 
        "South Park (Seattle)", 
        "Rainier Beach (Seattle)", 
        "Delridge (Seattle)", 
        "Burien"
    ];

    // Price ranges
    const priceRanges = [
        { label: "Under $10", min: 0, max: 10 },
        { label: "$10 - $15", min: 10, max: 15 },
        { label: "$15 - $20", min: 15, max: 20 },
        { label: "$20 - $30", min: 20, max: 30 },
        { label: "$30 and above", min: 30, max: Infinity }
    ];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prevFilters => {
            // Toggle the filter value on and off
            if (prevFilters[name] === value) {
                return { ...prevFilters, [name]: '' };
            } else {
                return { ...prevFilters, [name]: value };
            }
        });
    };

    const clearFilters = () => {
        setFilters({
            vegan: '',
            glutenFree: '',
            halal: '',
            nutFree: '',
            location: '',
            priceRange: ''
        });
        setFilteredRestaurants(allRestaurants); // Reset to all restaurants
    };

    const applyFilters = () => {
        const filtered = allRestaurants.filter(restaurant => {
            // Dietary filters
            if (filters.vegan && restaurant.vegan !== filters.vegan) return false;
            if (filters.glutenFree && restaurant.glutenFree !== filters.glutenFree) return false;
            if (filters.halal && restaurant.halal !== filters.halal) return false;
            if (filters.nutFree && restaurant.nutFree !== filters.nutFree) return false;

            // Location filter
            if (filters.location && restaurant.location !== filters.location) return false;

            // Price range filter
            if (filters.priceRange) {
                const selectedRange = priceRanges.find(range => range.label === filters.priceRange);
                if (restaurant.price < selectedRange.min || restaurant.price > selectedRange.max) return false;
            }

            return true;
        });
        setFilteredRestaurants(filtered);
    };

    return (
        <Container className="filter-container mb-4">
            <Button variant="secondary" className="mb-3" onClick={clearFilters}>
                Clear Filters
            </Button>

            <Accordion defaultActiveKey="0">
                {/* Dietary Restrictions */}
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Dietary Restrictions</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            {['Vegan', 'Gluten-Free', 'Halal', 'Nut-Free'].map((restriction, index) => (
                                <Form.Check
                                    key={index}
                                    type="checkbox"
                                    label={restriction}
                                    name={restriction.toLowerCase().replace('-', '')}
                                    value={restriction}
                                    checked={filters[restriction.toLowerCase().replace('-', '')] === restriction}
                                    onChange={handleFilterChange}
                                />
                            ))}
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Location Filter */}
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Location</Accordion.Header>
                    <Accordion.Body>
                        <Form.Select
                            name="location"
                            value={filters.location}
                            onChange={handleFilterChange}
                        >
                            <option value="">All Locations</option>
                            {lowIncomeLocations.map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </Form.Select>
                    </Accordion.Body>
                </Accordion.Item>

                {/* Price Range Filter */}
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Price Range</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            {priceRanges.map((range, index) => (
                                <Form.Check
                                    key={index}
                                    type="radio"
                                    label={range.label}
                                    name="priceRange"
                                    value={range.label}
                                    checked={filters.priceRange === range.label}
                                    onChange={handleFilterChange}
                                />
                            ))}
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Button variant="primary" className="mt-3" onClick={applyFilters}>
                Apply Filters
            </Button>
        </Container>
    );
}
