        QUnit.test("When startTimer is run, miliseconds should increment and equal 1", function(assert){

            assert.equal(startTimer(), 1)
        });

        QUnit.test("When startTimer is run, miliseconds should increment and equal 2 after 2 seconds", function(assert){

            assert.equal(startTimer(), 2)
        });

                QUnit.test("When startTimer is run, miliseconds should increment and equal 3 after 3 seconds", function(assert){

                    assert.equal(startTimer(), 3)
                });
