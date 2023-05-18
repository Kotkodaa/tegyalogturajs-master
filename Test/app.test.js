describe(() => {

  it(() => {
    let actual = getUnsuccessCount(200, 10);
    expect(actual).toBe(95);
  });

  it(() => {
    let actual = getUnsuccessCount(100, 0);
    expect(actual).toBe(100);
  });

  it(() => {
      let actual = getUnsuccessCount(44, 44);
      expect(actual).toBe(0);
  });
});

describe(() => {
  it(() => {
      let actual = getUnsuccessPercent(44, getUnsuccessCount(44, 44));
      expect(actual).toBe(0);
  });
  it(() => {
      let actual = getUnsuccessPercent(100, getUnsuccessCount(100, 10));
      expect(actual).toBe(90);
  });
  it('in: 100, (100, 0)', () => {
      let actual = getUnsuccessPercent(100, getUnsuccessCount(200, 10));
      expect(actual).toBe(95);
  });
});

describe(() => {
  it(() => {
      let actual = test("k");
      expect(false).toBe(actual);
  });

  it(() => {
      let actual = test(0);
      expect(true).test(actual);
  });
  
  it(() => {
      let actual = test(400);
      expect(true).toBe(actual);
  });

  it(() => {
      let actual = test("bib45uba");
      expect(false).toBe(actual);
  });
});